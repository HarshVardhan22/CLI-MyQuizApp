const readlineSync = require("readline-sync");
const chalk = require("chalk");
console.log(chalk.magentaBright("Welcome to the Quiz"));
let score = 0;
let username = readlineSync.question("What's your Name: \n");
console.log(chalk.yellowBright("Hello", username, ", Let's Play!!"));

console.log("\n");
console.log(chalk.blue("Rules & Instructions: "));
console.log(
  chalk.blue(
    "1.",
    username + ", There are 5 Questions about (drumroll) The Office"
  )
);
console.log(chalk.blue("2. You will get 2 points on each Right Answer."));
console.log(
  chalk.green(
    "3. No points will be deducted if your answer is wrong, it's not an exam chill!"
  )
);
console.log(
  chalk.red("4. Oh but you will be judged, it's not dinsey either!")
);

var mcqList = [
  {
    array: ["Paper", "Wood", "Alien Swords", "Beat"],
    question: "What was the company selling? ",
    answer: "Paper",
  },
  {
    array: ["Schrute Farm", "Beat Farm", "Wedding Farm", "Paper Farm"],
    question: "Name of Dwight's Farm?",
    answer: "Schrute Farm",
  },
  {
    array: ["Vanilla", "Cherry", "Strawberry", "Mixed-Berry"],
    question: "What's Pam's favorite flavor of yogurt? ",
    answer: "Mixed-Berry",
  },
  {
    array: ["Four Eye", "Phyll", "Easy Rider", "Vance"],
    question:
      "At Phyllis and Bob Vance's wedding, what did Michael say everyone called Phyllis back in high school?",
    answer: "Easy Rider",
  },
  {
    array: ["Michael", "Jim", "Kevin", "Ryan"],
    question: "Who started the Fire ",
    answer: "Ryan",
  },
  {
    array: ["Berries", "Mushrooms", "Leaves", "Wooden Stick"],
    question: "What does Dwight stop Michael from eating in the woods?",
    answer: "Mushrooms",
  },
];
function quizMcq(listOfAnswers, question, answer) {
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log("\n");
  if (listOfAnswers[userAnswer] === answer) {
    console.log(chalk.green("You are Right."));
    score = score + 2;
  } else {
    console.log(chalk.red("Ooops! The Correct Answer is:", answer));
  }

  console.log(chalk.cyan('Score is: ',score));
}
for (var i = 0; i < mcqList.length; i++) {
  console.log("\n");
  quizMcq(mcqList[i].array, mcqList[i].question, mcqList[i].answer);
 
}
console.log("\n");
console.log(chalk.magentaBright('Congratulations,',username,'your Total Score is: ',score));