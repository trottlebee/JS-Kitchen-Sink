var firstName = "Tracy";

console.log(firstName)

const statesNum = 50;

console.log(statesNum)

let numSum = 5 + 4;

console.log(numSum)


// Define variable under consideration with let, and log it.
let firstname = "Vicky";
console.log(firstname);
// Target the first character in the string to determine status.
firstChar = firstname.charCodeAt(0)
// Define the charCodeAt index as zero.
var hexl = 'L'.charCodeAt(0)

//* Use if/else statement to return result based on definition above. Vicky is told to go to the back of the line. Kelley is called next. *//
if (firstChar >= hexl) {
    console.log('Back of the Line!')
} else {
    console.log('Next!')
}

let newname = "Kelley";
console.log(newname);
firstChar = newname.charCodeAt(0)
var hexl = 'L'.charCodeAt(0)

if (firstChar >= hexl) {
    console.log('Back of the Line!')
} else {
    console.log('Next!')
}


function sayHello(msg) {
    alert("Hello World!")
}

sayHello("Hello World!");


var person = {
    name: 'Charles',
    age: 21
};

console.log(checkAge(person.name, person.age))

function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry ' + name + ' you are not old enough to view this page!');
    }
}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)


let arr = [{ veg: 'potatoes' }, { veg: 'tomatoes' }, { veg: 'beets' }, { veg: 'okra' }, { veg: 'collards' }];

arr.map((item) => {
    console.log(item.veg)
})



var person = {
    name: 'Charles',
    age: 21
};

console.log(chkAge(person.name, person.age))

function chkAge(name, age) {
    if (age < 21) {
        console.log('Sorry ' + name + ' you are not old enough to view this page!');
    }else{
        console.log('Congrats ' + name + ' you are old enough to view this page.')
    }
}

chkAge("Wilbur", 63)
chkAge("Edna", 20)
chkAge("Oscar", 21)
chkAge("Millie", 42)
chkAge("Barney", 14)