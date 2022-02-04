import React, { Component } from 'react'
import './CContact.css'


    
export default class CContact extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.myFunction = this.myFunction.bind(this);
      this.onInputFunction = this.onInputFunction.bind(this);


    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
      }
  
    handleSubmit(event) {
        alert('Wysłano następującą wiadomość: ' + this.state.value);
        window.location.href = "/"
        event.preventDefault();
    }
    myFunction(event) {
      alert("Pamiętaj o wprowadzeniu porawnych danych!");
    }
    onInputFunction(event) {
      var x = document.getElementById("myInput").value;
    document.getElementById("demo").innerHTML = "Treść wiadomości: " + x;
    }
  
    render() {
      return (
          <div className="contentMain">
              W razie chęci kontaktu prosimy o wypełnienie formularza:
        <form onSubmit={this.handleSubmit}>
            <table align="center">
                <tr>
          
           <th> Imię:</th>
           <th> <input onClick={this.myFunction} type="text"/></th>
          <br/>
          </tr>
          <tr>
          
           <th> Nazwisko:</th>
           <th> <input type="text"/></th>
          <br/>
          </tr>
          <tr>
          
           <th> E-mail:</th>
           <th> <input type="text"/></th>
          <br/>
          </tr>
          <tr>
           <th> Wiadomość:</th>
           <th> <textarea value={this.state.value} id="myInput" onChange={this.handleChange} onInput={this.onInputFunction} rows="5" cols="20"/></th>
          <br/>
          </tr>
          <tr>
          <td></td><td><input type="submit" value="Wyślij wiadomość" onClick="location.href='1.html'"/></td>
          </tr>
          </table>
        </form>
         <br/>
         <p id="demo"></p>
          </div>
       
      );
    }
  }