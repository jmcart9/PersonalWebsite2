//var generateName = require("sillyname");

import generateName from 'sillyname';
var sillyName = generateName();

import randomSuperhero from "superheros";
var name = randomSuperhero();

console.log(`My name is ${sillyName}.`);

console.log(`Superhero is ${name}.`);