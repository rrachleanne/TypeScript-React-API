import React, { Component } from 'react';
//import faker
import faker from "faker";
import { Wrapper } from "./Random.styles";


const fakers = require('faker');
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
console.log(`Employee: ${firstName} ${lastName}`);

export default function Random() {
  return(
    <div>
      <h1>Data</h1>
    </div>
  )
}
