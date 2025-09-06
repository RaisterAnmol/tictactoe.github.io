let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);


        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                return;
            }
        }
    }

};

resetBtn.addEventListener("click", resetgame);
newBtn.addEventListener("click", resetgame);


/** practice question 1 in video 1 


const product = {
    object : "ballPen",
    price: 270,
    rating: 4 ,
    offer: "5%",


};
console.log("the product information will be ",product);

**/


// practice question 2 in video 1 
/** 
 const profile ={
    Name: "@aditya",
    posts: 195,
    followers: "569k",
    following: 4,
 };
 console.log(profile);
 console.log(typeof["posts"]);
**/


// practice question 1 in video 2
// 1st to solve by usig  Ternary Operators
/*
let num=Number(prompt("Enter a number to check the number is a multiple of 5 or not"));
console.log(num%5===0?"multiple of 5":"not a multiple of 5");*/

// 2nd to solve by using Conditional Statements
/*
let num=Number(prompt("enter the number:"));

if (num%5===0){
    console.log("the number is a multiple of 5");
}else{
    console.log("the number is not a multiple of 5");
}*/


// practice question 2 in video 2nd
/*
let grade=Number(prompt("enter the grade you score"));

if(grade>=80&&grade<=100){
    console.log("you get A grade");
}else if(grade>=70&& grade<=80){
    console.log("you get B grade");
}else if(grade>=60&& grade<=70){
    console.log("you get C grade");
}else if(grade>=50&& grade<=60){
    console.log("you get D grade");
}else if(grade>=0&& grade<=50){
    console.log("you get F grade");
}else{
    console.log("enter a correct grade");
}*/

// practice question 1 in video 3rd
/*
let num=0;

for(num; num<101; num++){
    if( even=num%2===0){
         console.log("the number is EVEN ", num);
    };
   
}
*/
// practice question 2 in video 3rd
/*
let correctNumber=4; 
let randomNumber=Number(prompt("enter a number"));

while(correctNumber!==randomNumber){
    randomNumber=Number(prompt("You guess the wrong number. Guess again"));
}
console.log("You guess the correct number");
*/
// for in and for of loop , to check the use 
// for in used to give the total number of string or char in the variable means in aditya it consist of 5 char then it will be give the output 5
// for of used to see what are the single single value present in the variable means in aditya it will give a , d ,i ,etc til a as output
/*
let str="Aditya";
console.log(str);
for(let strs of str){
    console.log(strs);
}
let str1="Aditya";
console.log(str1);
for(let strs in str1){
    console.log(strs);
}
*/

// practice question 3 in video 3rd

/*
let userNAme= prompt("entet your full name ");
let asterNAme="@";
let nameLength = userNAme.length;
let generatedUsername = asterNAme.concat(userNAme,nameLength);

console.log("Your generated username is: " + generatedUsername);
*/


// practice question 1 in 4th video

/*
let students=[85,97,44,37,76,60]

let sum=0;
for (marks of students){
    sum+=marks;
    
}
let avg=sum/students.length;
console.log("the avg is ",avg);

*/

// practice question 2 in 4th video
/*
normal loop aur those loop which
let prices = [250, 645, 300, 900, 50];
for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] - prices[i] * 0.10;
}
console.log("Updated prices:", prices);


*/


// practice question 3 in 4th video


/*
let companies=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

//Remove the first company from the array

companies.shift()
console.log(companies);

//Remove Uber & Add Ola in its place

companies.splice(1,1,"Ola");
console.log(companies);

//Add Amazon at the end

companies.push("Amazon");
console.log(companies);

*/


/* we can use normal function as below

function functionname(param1,param2){ in this param is the parameter aur a variable 

}
functionName();  is used to call a function

we can also use the second type of function that is aarow function comes in morden js 

const functionname=(param1,param2)=>{
    
}
example of this will be 

const sum=(a,b)=>{
    return a+b;
}

*/

// practice question 1st in 5th video

/*
let name = prompt("enter your name to check the total number of vowels");  // or "ADITYA"

function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();  // convert to lowercase

    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

console.log("Number of vowels:", countVowels(name)); // Correctly outputs: 3

*/


// practice question 2nd in 5th video


/*
let name = prompt("enter your name to check the total number of vowels");  // or "ADITYA"

const countVowel=(str)=>{
    let count = 0;
    str = str.toLowerCase();  // convert to lowercase

    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}

console.log("Number of vowels:", countVowel(name));

*/

// practice question 3rd in 5th video


/*
let number=[1,2,3,4,5];

number.forEach((val)=>{
    console.log(val*val);
})
*/

// practice question 4th in 5th video

/*
let marks=[40,55,67,90,95,78,99,100,88,99,93];

let toppers=marks.filter((val)=>{
    return val>90;
}
)
console.log(toppers);
*/

// practice question 5th in 5th video
/*
let n=Number(prompt("enter an array of number"));

let arr=[];

for(i=1; i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((res,cur)=>{
    return res+cur;
});

console.log("the total sum is", sum);

let product=arr.reduce((res,cur)=>{
    return res*cur;
});

console.log("the product  is", product);
*/

/**let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from apna college";
let divs = document.querySelectorAll(".class");
divs[0].innerText= "new value 1";
divs[1].innerText= "new value 2";
divs[2].innerText= "new value 3";
let divs = document.querySelectorAll(".class");
let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}
function changeBackground() {
    document.body.style.backgroundColor = getRandomColor();
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
let btn = document.createElement("button");
btn.innerText = "Click Me!"
btn.style = "background: red; color : white";
document.body.prepend(btn);
document.querySelector("p").classList.add("new-class");
let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";
body.classList.add(currmode);
mode.addEventListener("click", () => {
    if (currmode === "light") {

        body.classList.replace("light", "dark");
        currmode = "dark";
    } else {
        body.classList.replace("dark", "light");
        currmode = "light";
    }
    console.log("currmode is ", currmode);
}
);
let student = [85, 97, 44, 37, 76, 60];


let sum = 0;
for(let mark of student){
    sum=sum+mark;
}
console.log("sum is ",sum);

let avg=sum/student.length;
console.log("the average is ",avg);**/