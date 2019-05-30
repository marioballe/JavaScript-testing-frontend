export class User {
    constructor(name, role, level) {
      this.name = name;
      this.role = role;
      this.level = level;
    }
  // Getter
  get getName () {
    return this.name();
  }
  get getrole () {
    return this.role();
  }
  get getLevel () {
    return this.level();
  }
}