// const inquirer = require("inquirer");

// const mainMenu = () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "menuChoice",
//         message: "Welcome to Island Adventure!\nWhat would you like to do?",
//         choices: ["New Game", "Load Game", "Quit"],
//       },
//     ])
//     .then((answer) => {
//       switch (answer.menuChoice) {
//         case "New Game":
//           newGame();
//           break;
//         case "Load Game":
//           loadGame();
//           break;
//         case "Quit":
//           console.log("Goodbye!");
//           break;
//       }
//     });
// };

// const newGame = () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "difficulty",
//         message: "Select a difficulty level:",
//         choices: ["Easy", "Medium", "Hard"],
//       },
//     ])
//     .then((answer) => {
//       console.log(`You have selected ${answer.difficulty} difficulty level.`);
//       console.log("Welcome to the island!");
//       // Code for starting a new game
//     });
// };

// const loadGame = () => {
//   console.log("Loading saved game...");
//   // Code for loading saved game
// };

// mainMenu();
