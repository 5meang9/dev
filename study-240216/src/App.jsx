import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title : "WEB", sub : "world wide web!"},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub} />
        <TOC data={this.state.contents} />
      </div>
    );
  }
}



export default App;
