let name = "Oleg";

if (name==="Oleg"){
    console.log(`Hello, Boss!!!`);
} else if(name==="Nastya"){
    console.log(`I love you, ${name}!!!`);
} else if(name==="Vitia"){
    console.log(`Hello, ${name}!!!`)
} else {
    console.log("Hello, stranger!!!");
};

let i = 2;
while (i<=100){
    i=i*i/(0.5*i);
    console.log(i);
};



for (let sheepCounted=0;sheepCounted<=10;sheepCounted++){
    console.log(`Посчитано овец: ${sheepCounted}!`);
    sheepCounted++;
};
console.log("Xpppppppppp-Xppp");

let animals = ["lion", "flamingo", "white bear", "boa"];

for (let i = 0; i<animals.length;i++){
    console.log(`In this zoo is ${animals[i]}.`);
};

name = "Anastasya";

for (let i=0; i<name.length;i++){
    console.log(`In my name is a latter "${name[i]}"`);
};

for (let i = 1; i<=10000000; i=i*3){
    console.log(i);
};

let j = 3;

while (j<=10000){
    console.log(j);
    j*=3;
};

let arr = ["Cat", "Fish", "Lemur", "Elefant"];

for (let i=0; i<arr.length; i++){
    arr[i] = arr[i] + " - it`s a beautiful wild!";
    console.log(arr[i]);
};

console.log(arr);

let alphabet = "абвгдеёдзийклмнопрстуфхцчшщъыьэюя ";
let randomstring = "";

for (let i = 0; i <=100; i++){
    randomstring+=alphabet[Math.floor(Math.random()*alphabet.length)];
};

arr = randomstring.split(" ");
console.log(arr);

let input = "NASTYA, I LOVE YOU!";
let output = "";

for (let i=0; i<input.length;i++){
    if (input[i]==="a"||input[i]==="A"){
        output+="4";
    } else if (input[i]==="e"||input[i]==="E"){
        output+="3";
    } else if (input[i]==="i"||input[i]==="I"){
        output+="1";
    } else if (input[i]==="o"||input[i]==="O"){
        output+="0";
    } else {
        output+=input[i];
    }
};

console.log(output);

