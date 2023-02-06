import inquirer from "inquirer";
const response = await inquirer.prompt([
    {
        name: "number",
        type: "number",
        message: "Kindly enter any number"
    }
]);
let a = response.number;
let b = Math.floor(Math.random() * 10);
//console.log(b)
if (a == b) {
    console.log("You Guess a Right Number " + a);
}
else {
    console.log("Your guess number is not right");
}
