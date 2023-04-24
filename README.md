<p align="center"><img src="/art/logo.svg" alt="Logo Reactor for Laravel"></p>

<p align="center">
    <a href="https://packagist.org/packages/lucky-media/reactor">
        <img src="https://img.shields.io/packagist/dt/lucky-media/reactor" alt="Total Downloads">
    </a>
    <a href="https://packagist.org/packages/lucky-media/reactor">
        <img src="https://img.shields.io/packagist/v/lucky-media/reactor" alt="Latest Stable Version">
    </a>
    <a href="https://packagist.org/packages/lucky-media/reactor">
        <img src="https://img.shields.io/packagist/l/lucky-media/reactor" alt="License">
    </a>
</p>

# Reactor for Laravel

Reactor is a Laravel package that provides minimal scaffolding for Laravel applications, making it simple for developers to get started with a fully functional web application. This package has a strong focus on frontend tooling and comes with Authentication, Inertia.js, React, and a very opinionated setup. Created by Lucky Media, Reactor aims to simplify and streamline your development process.

## Why Reactor?
While Laravel Breeze provides a simple and minimal boilerplate with authentication for starting a new Laravel project, Reactor for Laravel is specifically designed to offer a more comprehensive set of features and tools catered towards modern web application.

Reactor has a more advanced and opinionated frontend setup compared to Breeze. It includes pre-configured ESLint and Prettier configs, Husky hooks for automatic code formatting and linting, and a GitHub Workflow that leverages Laravel Pint. Together, these tools contribute to a clean and consistent codebase, fostering best practices among developers.

Reactor comes with pre-built, opinionated frontend components that are influenced by `shadcn/ui`. These components are built with composability in mind, making it easier to build and customize application UI.


## Features

- Authentication
- Pest for Laravel
- PHP Ide Helper
- Inertia.js with React
- Configured ESLint and Prettier
- Husky hooks to automatically format and lint code
- GitHub Workflow to automatically format code with Laravel Pint
- Opinionated frontend components with composability in mind, heavily inspired by `shadcn/ui`
- Radix UI headless components
- Sonner for Toast notifications
- Lucide React for icons

## Installation

Before you get started with Reactor for Laravel, make sure you have the following prerequisites:

- Laravel 9+
- Composer
- Node.js 16+

Follow these steps to install:

1. Install the package via Composer:

```bash
composer require lucky-media/reactor
```

2. Install the package by running

```bash
php artisan reactor:install
```

3. Run the frontend build process:

```bash
npm run dev
```

## Usage

Reactor for Laravel comes with a pre-configured and opinionated setup for Laravel applications. This includes frontend components, headless components, and more.

### Authentication

The package comes with a ready-to-use authentication system. Make sure you've configured your database and run migrations. To customize your authentication views, you can either modify the included components or create your own.

### Pest for Laravel
Reactor for Laravel comes with Pest for Laravel pre-installed. To run your tests, simply run:

```bash
./vendor/bin/pest
```

### Inertia.js with React

Reactor for Laravel is built on top of Inertia.js with React for a smooth, single-page application experience. Make sure to review the Inertia.js documentation to understand and wire up additional pages.

### ESLint, Prettier, and Husky

The package comes with pre-configured ESLint and Prettier configs, ensuring consistent and clean code. Additionally, Husky hooks run automatically to format and lint your code before committing.

### PHP Ide Helper

Integrate with popular IDEs to improve the developer experience. In the scripts section of your `composer.json` file, you need to add the following:
```json
{
    "post-update-cmd": [
        "@php artisan vendor:publish --tag=laravel-assets --ansi --force",
        "@php artisan ide-helper:models -N",
        "@php artisan ide-helper:generate",
        "@php artisan ide-helper:eloquent",
        "@php artisan ide-helper:meta"
    ]
}
```

### GitHub Workflow with Laravel Pint

Reactor for Laravel includes a pre-configured GitHub Workflow to automatically format code with Laravel Pint. This ensures a clean codebase and encourages best practices across your team.

### Frontend Components

The included frontend components are highly opinionated and influenced by [shadcn/ui](https://ui.shadcn.com/). They are designed for composability and ease of use. Be sure to explore and customize these components according to your needs.

- Components are composed using [Tailwind Variants](https://www.tailwind-variants.org/).
- Radix UI headless components are used for greater flexibility. Read their docs [here](https://radix-ui.com/docs/primitives/overview/introduction).

### Sonner, and Lucide React

The package includes Sonner for Toast notifications, and Lucide React for icons. These packages are integrated to provide a uniform and highly customizable frontend experience.

- [Sonner Documentation](https://sonner.emilkowal.ski/).
- [Lucide React Icons](https://lucide.dev/docs/lucide-react).

## Support

If you find any issues or have suggestions for improvements, please feel free to open an issue on the [GitHub repository](https://github.com/lucky-media/reactor).


## Security Vulnerabilities

Please email us at [hello@luckymedia.dev](mailto:hello@luckymedia.dev) if you find any security vulnerabilities in Reactor. All security vulnerabilities will be promptly addressed.

## Credits
- [Laravel Breeze](https://github.com/laravel/breeze)
- [Shadcn UI](https://github.com/shadcn/ui)
- [Radix UI](https://radix-ui.com/)
- [Sonner](https://sonner.emilkowal.ski/)
- [Lucide React](https://lucide.dev/docs/lucide-react)

## License

Reactor is open-sourced software licensed under the [MIT license](LICENSE.md).
