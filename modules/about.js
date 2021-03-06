import React from 'react';
import { Link } from 'react-router-dom'

class About extends React.Component {
  render() {
    return (

    <div className="container-fluid text center">
      <nav className="navbar">
        <div className="dropdown">
            <i className="glyphicon glyphicon-align-justify dropdown-toggle" type="" data-toggle="dropdown"></i>
            <ul className="dropdown-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/feed">Feed</Link></li>
              <li><Link to="/category_list">Cateories</Link></li>
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/">Log Out</Link></li>
            </ul>
          </div>
        </nav>
    <div className="photorow">
      <h1 className="pageheader">About Us</h1><br></br>
      <div className="row">
      <div className="col-md-8 col-md-offset-2 catSlogan">Event.Target is a web-based application that curates a custom event calendar based on your interests. Event.Target wants users to get out and explore, investigate, and meet rad people that enjoy the same activities as themselves.</div>
      </div><br></br>
      <h1 className="pageheader">The Team</h1>
      <div className="row">
        <div className="col-xs-6 col-sm-4">
          <div className="panel panel-default clicable">
             <div className="panel-body">
                 <div className="top-img joshcard">
                     <img className="josh top-img" src="http://i.imgur.com/zgl1zC4.jpg"></img>
                 </div>
                  <h1>Joshua Lerner</h1><br></br>
                  <p>Joshua is a Naropa University grad that likes space and hydro flasks.</p><br></br>
                  <Link to="" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></Link>
                  <Link to="" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link>
                  <Link to="" target="_blank"><i className="fa fa-link fa-2x" aria-hidden="true"></i></Link>
             </div>
         </div>
        </div>
        <div className="col-xs-6 col-sm-4">
          <div className="panel panel-default clicable">
             <div className="panel-body">
                 <div className="top-img">
                     <img className="matt top-img" src="http://i.imgur.com/jhvLYAB.jpg"></img>
                 </div>
                  <h1>Matthew Albrecht</h1><br></br>
                  <p>Driven and self-motivated web developer with a degree in Computer Science from the University of Colorado. Analytical and detail-oriented learner with a passion for data and design with a desire to take on challenges in a fast-paced environment.</p><br></br>
                  <Link to="https://github.com/MatthewAlbrecht" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></Link>
                  <Link to="https://www.linkedin.com/in/matthewwealbrecht/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link>
                  <Link to="https://talent.galvanize.com/students/1395" target="_blank"><i className="fa fa-link fa-2x" aria-hidden="true"></i></Link>
             </div>
         </div>
        </div>
        <div className="col-xs-6 col-sm-4">
          <div className="panel panel-default clicable">
             <div className="panel-body">
                 <div className="top-img">
                     <img className="kevin top-img" src="http://i.imgur.com/EtaVBj7.jpg"></img>
                 </div>
                  <h1>Kevin Seagraves</h1><br></br>
                  <p>A curator of code, user experience, and customer satisfaction, Kevin believes in beautiful code and elegant solutions to great challenges. He wants to use his skills in computer programming to better the world and live a happy, healthy life. </p><br></br>
                  <Link to="https://www.linkedin.com/in/kevinseagraves/" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></Link>
                  <Link to="https://github.com/captnseagraves" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link>
                  <Link to="https://talent.galvanize.com/students/1396" target="_blank"><i className="fa fa-link fa-2x" aria-hidden="true"></i></Link>
             </div>
         </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-4">
            <div className="panel panel-default clicable">
               <div className="panel-body">
                   <div className="top-img">
                       <img className="nico top-img" src="http://i.imgur.com/ZRxr2sp.jpg"></img>
                   </div>
                    <h1>Nicolas Roldos</h1><br></br>
                    <p>Nico is a full-stack web developer learning and most relevant skills in the web development software industry. He have a lot of experience specifically in applying G.I.S. and location-based data to web-based software, and easily deployable mobile-apps.</p><br></br>
                    <Link to="https://github.com/nicowave" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></Link>
                    <Link to="https://www.linkedin.com/in/nicoroldos/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link>
                    <Link to="http://nicoroldos.com" target="_blank"><i className="fa fa-link fa-2x" aria-hidden="true"></i></Link>
               </div>
           </div>
        </div>
        <div className="col-xs-6 col-sm-4">
            <div className="panel panel-default clicable">
               <div className="panel-body">
                   <div className="top-img">
                       <img className="tom top-img" src="http://i.imgur.com/OkHubaP.png"></img>
                   </div>
                    <h1>Thomas Garrison</h1><br></br>
                    <p>Full-Stack developer, specializing in Front End Development and UI Design, Tom first fell in love with programming when he was in later elementary school. Tom have a passion for the outdoors and bluegrass music.</p><br></br>
                    <Link to="https://github.com/TomGarrison" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></Link>
                    <Link to="https://www.linkedin.com/in/thomas-garrison/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link>
                    <Link to="www.tomgarrisondevelops.surge.sh" target="_blank"><i className="fa fa-link fa-2x" aria-hidden="true"></i></Link>
               </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-4">
          <div className="panel panel-default clicable">
             <div className="panel-body">
                 <div className="top-img">
                     <img className="pete top-img" src="https://scontent.xx.fbcdn.net/v/t1.0-9/1929314_514617899685_850_n.jpg?oh=6666cb3c729a9f7de457395766ee36a1&oe=59A2C3F0"></img>
                 </div>
                  <h1>Pete Silva PM</h1><br></br>
                  <p>Both an artist and a scientist, Pete has been honing his skills on the web since 1999, and skills with interactive media since 2005. He’s seen the web evolve from hand-coded HTML pages to fully AJAX-enabled, database-backed web applications. DM me.</p><br></br>
                  <Link to="https://soundcloud.com/petesilva" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></Link>
                  <Link to="https://soundcloud.com/petesilva" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link>
                  <Link to="https://soundcloud.com/petesilva" target="_blank"><i className="fa fa-link fa-2x" aria-hidden="true"></i></Link>
             </div>
         </div>
        </div>
      </div>
    </div>
</div>


    );
  }
}

export default About;
