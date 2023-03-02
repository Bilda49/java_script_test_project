class Zoltar {
  constructor(name) {
    this.name = name;
    this.health = 500;
    this.multiplyDamage = 20;
    this.damage = Math.round(Math.random() * this.multiplyDamage);
  }
}

module.exports = {
  Zoltar,
};
