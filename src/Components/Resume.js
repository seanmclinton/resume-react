import React, { Component } from 'react';

class Resume extends Component {
    
  render() {

    if(this.props.data){
      var work = this.props.data.map(function(data){
        return <div key={data.company}><h3>{data.company}</h3>
            <p className="info">{data.job_title}<span>&bull;</span> <em className="date">{formatDate(data.start_date) + " - " + formatDate(data.end_date)}</em></p>
            <p>{data.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      {/* <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div> */}
   </section>
    );
  }
}

function formatDate(string) {
    if (string == null){
        return "Present"
    } else{
    var options = { year: 'numeric', month: 'long'};
    return new Date(string).toLocaleDateString('en-US',options);
    }
}

export default Resume;