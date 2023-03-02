const { Character } = require("./character");

class Tank extends Character {
  constructor(name) {
    super(name);
    this.weapon = "Axe";
  }
}

module.exports = {
  Tank,
};
