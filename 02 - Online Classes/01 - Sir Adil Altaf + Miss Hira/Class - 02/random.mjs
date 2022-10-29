import randomInteger from "random-int";
import PromptSync from "prompt-sync";

//userinput declear

const userPrompt = "Enter the Numbers";

const choices = ["Car", "Bus", "Egg"];

// computer choose randomly

const computerChoice = randomInteger(0, 3);
const computerChoiceName = choices[computerChoice];
// console.log(computerChoice);

//prompt the user for an input

const prompt = PromptSync();
const userInput = prompt(userInput);
console.log(userInput);

const userChoice = choices[userInput];
console.log(userChoice);
