const { Character } = require("./character");

class Wizard extends Character {
  constructor(name) {
    super(name);
    this.weapon = "Staff of wizard";
  }
}

module.exports = {
  Wizard,
};
