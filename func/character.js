class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.energy = 200;
    this.level = 0;
    this.multiplyDamage = 30;
    this.damage = Math.round(Math.random() * this.multiplyDamage);
    //resources
    this.iron = 0;
    this.wood = 0;
    this.legendary_item = 0;
    //equip
    this.helmet = "simple helmet";
    this.armor = "simple armor";
    this.boots = "simple boots";
    this.weapon = "";
    this.pet = 0;
  }

  stats() {
    return console.table({
      name: this.name,
      health: this.health,
      energy: this.energy,
      level: this.level,
      pet: this.pet,
    });
  }
  inventory() {
    return console.table({
      iron: this.iron,
      wood: this.wood,
      legendary_item: this.legendary_item,
    });
  }
  toRest() {
    if (this.energy >= 200) {
      console.log("You're not tired, no need to rest");
    } else if (this.energy < 200) {
      console.log("You fall asleep. Energy + 30");
      this.energy += 30;
    }
  }
  equip() {
    return console.table({
      helmet: this.helmet,
      armor: this.armor,
      boots: this.boots,
      weapon: this.weapon,
    });
  }

  levelUp() {
    this.level += 1;
    console.log(`You got 1 level. Your current level ${this.level}`);
    if (this.level <= 120) {
      this.health += 2;
      this.damage += 1;
    }
  }
}

module.exports = {
  Character,
};
