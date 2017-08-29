import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import AllContacts from './hard.js'

function Contact(props){

var colorChoice;
var torf;

if(props.status === "pending"){
  colorChoice = {
    background: 'orange'
  };
} else if(props.status === "done"){
  colorChoice = {
    background: 'green'
  };
}

  function handleClick(e) {
    e.preventDefault();
}

  return(
    <div>
    <p>You need to contact {props.fname} {props.lname} at {props.pnumber}</p>
    <button onClick={handleClick}>{props.status}</button>
    <div style={colorChoice} className="icon"></div>

    </div>
  )
}

function Greet(props) {
  return (
    <div className="Greet">
    <h1>Hello World, {props.fname}</h1>
    <p>You need to contact {props.fname} {props.lname} at {props.pnumber} </p>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    //This sets the initial state
    this.state = {
      contacts: [
        {fname: "Teia", lname: "McGee", pnumber: "704-555-1234", status:"pending"},
        {fname: "Juan", lname: "Hernandez", pnumber: "704-555-1234", status:"pending"},
        {fname: "Mark", lname: "Kroh", pnumber: "704-555-1234", status:"pending"}
      ]
    };
  }

  //Render is the thing that changes based state change

  render() {
    //Map creates contacts into a new object using the function(contact)
    const contactList = this.state.contacts.map(function(contact){
      //Creates a new instance of Contact the function
      return <Contact
      fname={contact.fname}
      lname={contact.lname}
      pnumber={contact.pnumber}
      status={contact.status}
      />
    });
    //this is what you want to return from the render function
    return(
      <div>
      <Greet fname="Victoria" lname="Echevarria" pnumber="704-555-1234"/>
      {contactList}
      </div>
    );
  }
}

export default App;
