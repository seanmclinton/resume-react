import React, { Component } from 'react';

class About extends Component {
  render() {

   var profilepic = "images/profilepic.jpeg"
    if(this.props.data){
       var first_name = this.props.data.first_name
       var last_name = this.props.data.last_name
       var email = this.props.data.email
       var linked_in_link = this.props.data.linked_in_link
       var location = this.props.data.city
       var bio = this.props.data.bio;

    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Sean Clinton Headshot" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{first_name} {last_name}</p>
            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>
						         {location}
                   </span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     {/* <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a> */}
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;