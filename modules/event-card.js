import React from 'react'

class EventCard extends React.Component {

  render() {

    console.log('IN EVENTCARD')
    return (
<<<<<<< HEAD

          <div>
            <h1>{this.props.event.event_name}</h1>
            <hr></hr>
          </div>

=======
<div className="col-sm-6 col-md-4 col-lg-3 mt-4">
    <div className="card">
        <img className="card-img-top" src={this.props.event.event_cover_picture}></img><br></br>
        <div className="card-block">
        <p>click the calendar to add event</p>
            <figure className="profile">
            <i className="fa fa-calendar fa-lg" aria-hidden="true"></i><br></br>
            </figure>
            <h1 className="card-title mt-3">{this.props.event.name}</h1>
            <p>{this.props.event.category}</p>
            <div className="card-text">
              <p>{this.props.event.description}</p>
            </div>
        </div>
        <div className="card-footer">
            <small>{this.props.event.start_time} | {this.props.event.end_time}</small><br></br>
            <small>*Go to calendar to see events*</small>
        </div>
    </div>
</div>
>>>>>>> 9ed7e1441b89bce5b8e256f9e28d4856f5e5bf8f
       )
  }

 }

export default EventCard
