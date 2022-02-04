import React, { Component } from 'react'
import './CNavbar.css';






export default class CNavbar extends Component {
 /*  constructor(props) {
    super(props)
    this.state = {
      color: ''
    }
    this.changeColor = this.changeColor.bind(this)
    this.changeColor2 = this.changeColor2.bind(this)
  }

  changeColor() {
    this.setState({
      color: "inset -1px 2px 10px 0px rgb(40, 50, 169)"

    })
  }

  changeColor2() {
    this.setState({
      color: "inset -1px 2px 10px 0px rgb(40, 50, 169)"
    })
  } */

  render() {
    const {shadow, shadow2} = this.props;

    return (
      <div  className="main_box" >
        <a href="http://localhost:3000/"><div className="left" style={{boxShadow: shadow}}>Home</div></a>
        <a href="http://localhost:3000/kontakt" ><div className="right" style={{boxShadow: shadow2}}>Kontakt</div></a>
      </div>
    )
  }
}


