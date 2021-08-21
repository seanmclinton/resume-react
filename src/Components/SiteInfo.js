import React, { Component } from 'react';

class SiteInfo extends Component {
    
  render() {
    return (
      <section id="siteinfo">

        <br />
        <br />
      <div className="row siteinfo">

         <div className="three columns header-col">
            <h1><span>Technologies used on this site</span></h1>
         </div>

         <div className="nine columns main-col">
            <div>
                <h2>Python</h2>
            </div>
            <div>
                <h2>Django</h2>
            </div>
            <div>
                <h2>React</h2>
            </div>
        </div>
    </div>
   </section>
    );
  }
}

export default SiteInfo;