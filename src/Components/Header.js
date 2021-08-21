import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
       var first_name = this.props.data.first_name;
       var city= this.props.data.city;
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	        <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#siteinfo">Site Info</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Hi, I'm {first_name}</h1>
            <h3>I'm a {city} based <span>Software Engineer</span></h3>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;