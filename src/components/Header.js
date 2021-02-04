import React, {Component} from 'react';
import hamburger from '../Media/hamburger.png'

class Header extends Component{
    constructor(){
        super();
        this.state = {
            toggleShow: false
        }
    }

    toggleShowFunc = () => {
        this.setState( (prevState) => {
            return{
                toggleShow: !prevState.toggleShow
            }
        })
    }

    render(){
        return <header>
            <div>
            <h1 className="start">Start Bootstrap</h1>
            <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                <ul>
                    <li>
                        <a href="http://lmgtfy.com">About</a>
                    </li>
                    <li>
                    <a href="http://lmgtfy.com">Projects</a>
                    </li>
                    <li>
                    <a href="http://lmgtfy.com">Contact</a>
                    </li>
                </ul>
            </nav>
            <input onClick={this.toggleShowFunc} alt="menu-icon" type="image" src={hamburger} id="nav-btn"/>
            </div>
        </header>
    }
}

export default Header;
