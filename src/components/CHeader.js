import React, {Component} from 'react'
import logo from '../res/logo.png';
import './CHeader.css';


class CHeader extends Component{
render(){
    const {aName, aFamily} = this.props;
    return(
        <div className="headerContainer">
            <a href="http://localhost:3000/"><img src={logo} className="headerLogo" alt="logo"/></a>
            <h2>Witaj {aName+' '+aFamily} ta strona jest poświęcona planetom układu słonecznego!</h2>
        </div>
    );
}

}

export default CHeader