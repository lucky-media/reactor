export default class User {
  constructor(attributes = {}) {
    Object.assign(this, attributes);
  }

  get initials() {
    return this.name
      .split(' ')
      .map(word => word[0])
      .join('');
  }
}
