const { Character } = require("./character");

class Warrior extends Character {
  constructor(name) {
    super(name);
    this.weapon = "Sword";
  }
}

module.exports = {
  Warrior,
};
