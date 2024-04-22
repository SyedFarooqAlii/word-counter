#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("Welcome To The Word Counter App!"))
const answer: {
  sentence: string;
} = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Enter Your Sentence To Count The Word:",
  },
]);
const words = answer.sentence.trim().split(" ");
console.log(chalk.blueBright(words))
console.log(chalk.blueBright(`Your sentence word count is: ${words.length}`));
console.log(chalk.cyanBright("Thanks For Visiting Our Word Counter App!"))
// const answer : {
//   Sentence: string
// } = await inquirer.prompt([


//   {
//     name: "Sentence",
//     type: "input",
//     message:"Enter Your Sentence To Count The Word"
//   },
// ]);
