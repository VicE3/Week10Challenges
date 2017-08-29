// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import 'App.js';
//
//
//   function Contact(props) {
//
//
//       const contactArrays= [
//           {fname: "Teia", lname: "McGee", pnumber: "704-555-1234"},
//           {fname: "Juan", lname: "Hernandez", pnumber: "704-555-1234"},
//           {fname: "Mark", lname: "Kroh", pnumber: "704-555-1234"}
//         ];
//
//         const contactList = contactArrays.map(function(contactArray){
//           return <Contact
//             fname={contactArray.fname}
//             lname={contactArray.lname}
//             pnumber={contactArray.pnumber} />
//         });
//
//         return(
//           <p className="call">{contactList}</p>
//         )
//
// }
//
//
//
//



//
// export default Contact;


import React from 'react';

function AllContacts(props){
  return(
    <div>
      <p>You need to contact {props.fname} {props.lname} at {props.pnumber}</p>
    </div>
  )
}


export default AllContacts;
