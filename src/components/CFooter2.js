import React from 'react'
import './CFooter2.css';




export const CFooter2 = (props) => {
  function changeBackgroundColor(e) {
  e.target.style.color = 'white';
}
function changeBackgroundColor2(e) {
  e.target.style.color = 'black';
}
function toggleFunction() {
  alert("Wydarzenie ontoggle!");
}
  const {strona} = props;
 let date = new Date();
  return (
      <div className="footerDivClass">
 <h5 className="footerTextClass">
  <p onMouseOver={changeBackgroundColor} onMouseOut={changeBackgroundColor2}>Aktualna strona: {strona} <br/>
  PPFrond-end, własna strona.<br/> Dzisiaj mamy:{" "} {date.toDateString()}{" "}
  <br/> Wykonał: Grzesicki Tomasz</p>
  <br/>
  <details onToggle={toggleFunction}>
<summary>Copyright 2021</summary>
<p> by Tomasz Grzesicki</p>
</details>
  <br/>
  
  </h5>
      </div>
 );
}