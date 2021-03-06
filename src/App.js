import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
// import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import SiteInfo from './Components/SiteInfo';
// import Contact from './Components/Contact';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: [],
      personalInfo: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'http://localhost:8000/resume/',
      dataType:'json',
      cache: false,
      success: function(data){
        const resume_items = data.slice()
        this.setState({
          resumeData: resume_items});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  getPersonalInfo(){
    $.ajax({
      url:'http://localhost:8000/contact_info/1/',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({personalInfo: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
    this.getPersonalInfo();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.personalInfo}/>
        <About data={this.state.personalInfo}/>
        <Resume data={this.state.resumeData}/>
        <SiteInfo />
        {/* <Contact data={this.state.resumeData.main}/> */}
        {/* <Footer data={this.state.resumeData.main}/> */}
      </div>
    );
  }
}

export default App;
