import React, {Component} from 'react'
import './CContents.css'
import jsonData from '../res/text.json'
import jsonData2 from '../res/text2.json'
class CContents extends Component {

    constructor(){
        super()
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
        this.txtData2 = () => JSON.parse(JSON.stringify(jsonData2));
        const imgContext = require.context('../res/', false, /\.jpg$/);
        let img = {};
        this.imgs = imgContext.keys().reduce((icons, file) => {
            const cname = imgContext(file);
            const label = file.slice(2,-4);
            img[label] = cname;
            return img;
        }, {});
        this.changeMsg = this.changeMsg.bind(this);
        this.onCopyFunction = this.onCopyFunction.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeColor2 = this.changeColor2.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.changeSize2 = this.changeSize2.bind(this);

    }
    
    changeMsg = () => {
       this.setState({msg: 'Właśnie jesteś uczestnikiem kursu React, gratulacje!'});
        console.log('Przycisk został wciśnięty');
    }

    bigImg(x) {
        x.style.height = "64px";
        x.style.width = "64px";
      }
      handleHover = () => {
        alert("onmouseover");
      }

      onCopyFunction() {
        document.getElementById("demo").innerHTML = "Udało ci się skopiować akapit!"
      }
      changeColor(e) {
        e.target.style.color = 'blue';
      }
      changeColor2(e) {
        e.target.style.color = 'black';
      }
      changeSize(e) {
        e.target.style.height = '310px';
        e.target.style.width = '400px';
      }
      changeSize2(e) {
        e.target.style.height = '270px';
        e.target.style.width = '350px';
      }
      
    render()
    {

      

        const tabData = this.txtData2().data;
        const items = tabData.map((item) => (
            <div id={`"div${item.id}"`} className="contentFlex">
                    <img onMouseOver={this.changeSize} onMouseOut={this.changeSize2} className="contentFlexImg" src={this.imgs[item.img]} alt=""/><br/>
                    <p onMouseOver={this.changeColor} onMouseOut={this.changeColor2} className="contentFlexTxt">{item.text}</p><br/>
            </div>

        ))

        return(
            <div className="contentDivClass">
                <span onCopy={this.onCopyFunction}>Skopiuj ten akapit!!</span>
                <p id="demo"></p>
                {items}
                
                <iframe width="420" height="315" src="https://youtube.com/embed/Rf5E2FSFOjU"></iframe>
           
            </div>
        )
    }
}
export default CContents
