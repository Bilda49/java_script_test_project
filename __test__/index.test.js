let { Character } = require("../func/character");
let { start } = require("../index");

test("character", () => {
  const char = new Character();
  expect(typeof char.stats).toBe("function");
});
test("character", () => {
  const char = new Character();
  expect(typeof char.inventory).toBe("function");
});

test("character", () => {
  const char = new Character();
  expect(typeof char.toRest).toBe("function");
});

test("character", () => {
  const char = new Character();
  expect(typeof char.equip).toBe("function");
});

test("character", () => {
  const char = new Character();
  expect(typeof char.levelUp).toBe("function");
});
