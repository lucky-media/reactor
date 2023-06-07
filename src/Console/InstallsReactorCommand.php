<?php

namespace LuckyMedia\Reactor\Console;

use Illuminate\Filesystem\Filesystem;

trait InstallsReactorCommand
{

    /**
     * Install the Inertia React stack.
     *
     * @return int|null
     */
    protected function installInertiaReact()
    {
        // Install Inertia...
        if (! $this->requireComposerPackages(['inertiajs/inertia-laravel:^0.6.3', 'laravel/sanctum:^3.2', 'tightenco/ziggy:^1.0'])) {
            return 1;
        }

        // Install Ide Helper
        if (! $this->requireComposerPackages(['barryvdh/laravel-debugbar:^3.8'], true)) {
            return 1;
        }

        // Install Laravel Debugbar
        if (! $this->requireComposerPackages(['barryvdh/laravel-ide-helper:^2.13'], true)) {
            return 1;
        }

        // Copy Github workflow
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/inertia-react/.github', base_path('.github'));

        // Copy Husky hooks
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/inertia-react/.husky', base_path('.husky'));

        // NPM Packages...
        copy(__DIR__.'/../../stubs/inertia-react/package.json', base_path('package.json'));

        // Controllers...
        (new Filesystem)->ensureDirectoryExists(app_path('Http/Controllers'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/inertia-react/app/Http/Controllers', app_path('Http/Controllers'));

        // Requests...
        (new Filesystem)->ensureDirectoryExists(app_path('Http/Requests'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/inertia-react/app/Http/Requests', app_path('Http/Requests'));

        // Middleware...
        $this->installMiddlewareAfter('SubstituteBindings::class', '\App\Http\Middleware\HandleInertiaRequests::class');
        $this->installMiddlewareAfter('\App\Http\Middleware\HandleInertiaRequests::class', '\Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class');

        copy(__DIR__.'/../../stubs/inertia-react/app/Http/Middleware/HandleInertiaRequests.php', app_path('Http/Middleware/HandleInertiaRequests.php'));

        // Views...
        copy(__DIR__.'/../../stubs/inertia-react/resources/views/app.blade.php', resource_path('views/app.blade.php'));

        // Components + Pages...
        (new Filesystem)->ensureDirectoryExists(resource_path('js/Components'));
        (new Filesystem)->ensureDirectoryExists(resource_path('js/Layouts'));
        (new Filesystem)->ensureDirectoryExists(resource_path('js/Pages'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/inertia-react/resources/js/Hooks', resource_path('js/Hooks'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/inertia-react/resources/js/Models', resource_path('js/Models'));


        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/inertia-react/resources/js/Components', resource_path('js/Components'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/inertia-react/resources/js/Layouts', resource_path('js/Layouts'));
        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/inertia-react/resources/js/Pages', resource_path('js/Pages'));


        // Tests...
        if (! $this->installTests()) {
            return 1;
        }

        (new Filesystem)->copyDirectory(__DIR__.'/../../stubs/inertia-react/pest-tests/Feature', base_path('tests/Feature'));

        // Routes...
        copy(__DIR__ . '/../../stubs/inertia-react/routes/web.php', base_path('routes/web.php'));
        copy(__DIR__ . '/../../stubs/inertia-react/routes/auth.php', base_path('routes/auth.php'));

        // "Dashboard" Route...
        $this->replaceInFile('/home', '/dashboard', app_path('Providers/RouteServiceProvider.php'));

        // Tailwind / Vite...
        copy(__DIR__.'/../../stubs/inertia-react/resources/css/app.css', resource_path('css/app.css'));
        copy(__DIR__.'/../../stubs/inertia-react/postcss.config.js', base_path('postcss.config.js'));
        copy(__DIR__.'/../../stubs/inertia-react/tailwind.config.js', base_path('tailwind.config.js'));
        copy(__DIR__.'/../../stubs/inertia-react/vite.config.js', base_path('vite.config.js'));

        copy(__DIR__ . '/../../stubs/inertia-react/jsconfig.json', base_path('jsconfig.json'));
        copy(__DIR__.'/../../stubs/inertia-react/resources/js/app.jsx', resource_path('js/app.jsx'));

        // Eslint and Pretter config
        copy(__DIR__.'/../../stubs/inertia-react/.eslintrc.js', base_path('.eslintrc.js'));
        copy(__DIR__.'/../../stubs/inertia-react/.prettierrc', base_path('.prettierrc'));

        $this->replaceInFile('.vue', '.jsx', base_path('tailwind.config.js'));

        if (file_exists(resource_path('js/app.js'))) {
            unlink(resource_path('js/app.js'));
        }

        $this->components->info('Installing and building Node dependencies.');

        if (file_exists(base_path('pnpm-lock.yaml'))) {
            $this->runCommands(['pnpm install', 'pnpm run build']);
        } elseif (file_exists(base_path('yarn.lock'))) {
            $this->runCommands(['yarn install', 'yarn run build']);
        } else {
            $this->runCommands(['npm install', 'npm run build']);
        }

        $this->line('');
        $this->components->info('Reactor scaffolding installed successfully.');
    }
}
