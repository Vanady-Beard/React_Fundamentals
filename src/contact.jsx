import React, { Component } from "react";

//Import css if you want it 

class Contact extends Component{

    render(){

return (

    <form onSubmit={this.handlesubmit}>

     <input type="text" name="name" placeholder="Name" onChange={this.handlechange}/>

     <input type="email" name="email" placeholder="Email" onChange={this.handlechange}/>

     <textarea type="message" placeholder="Message" onChange={this.handlechange}/>

    <button type="submit">Submit</button>




    </form>

   
);
    }
}

export default Contact;