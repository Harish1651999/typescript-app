// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 24;

let userName: string;

userName = "Max"

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// Type Alias
type Person = {
    name: string,
    age: number
}

let person: Person;

person = {
    name: 'Max',
    age: 32
}

let people: Person[];

// Type inference
// Union Type
let course: string | number | boolean = "React - The Complete Guide";

course = 12345

// Function & types

function add(a: number, b: number){
    return a + b;
}

function print(value: any){
    console.log(value);
}

// Generics

function inserAtBegining<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = inserAtBegining(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = inserAtBegining(['a', 'b', 'c'], "d")

// updatedArray[0].split('')

