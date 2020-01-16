import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import baseball from './image/hobby/baseball.JPG';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
          <ul className="navbar">
            <li className="navbar_item"><Link className="navbar_link" to="/">home</Link></li>
            <li className="navbar_item"><Link className="navbar_link" to="/about">about</Link></li>
            <li className="navbar_item"><Link className="navbar_link" to="/work">work</Link></li>
            <li className="navbar_item"><Link className="navbar_link" to="/hobby">hobby</Link></li>
          </ul>
      </div>
    );
  }
}
export default App;
