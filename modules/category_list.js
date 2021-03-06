import React from 'react'
import CategoryListItem from './category_list_item'
import { Link } from 'react-router-dom'

class CategoryList extends React.Component {
   constructor(props){
     super(props)

     this.state = {
       categories: ['FOOD TASTING',
       'THEATER EVENT',
       'HEALTH/WELLNESS',
       'ART EVENT',
       'PARTIES/NIGHTLIFE',
       'SHOPPING',
       'COMEDY',
       'THEATER/DANCE',
       'MUSIC',
       'FESTIVAL EVENT',
       'COMMUNITY',
       'FOOD/DRINK',
       'RELIGION',
       'WORKSHOP',
       'CLASS EVENT',
       'ART/FILM',
       'GAMES',
       'SPORTS/RECREATION',
       'FAMILY EVENT',
       'NETWORKING',
       'CAUSES',
       'NEIGHBORHOOD',
       'MUSIC EVENT',
       'OTHER',
       'BOOKS/LITERATURE',
       'FITNESS',
       'MEETUP']
,
       user_cats: []
     }
     this.handler = this.handler.bind(this)
 }

    componentDidMount() {
      console.log('WE IN HERE YOU');
      console.log(document.cookie);
      fetch(`/api/user_category`, {
        credentials: "include",
         headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
        })
         .then(res => res.json())
         .then(cats => {
            console.log('ressy', cats);
            this.setState({user_cats: cats})
         })
      }

      handler() {
        console.log('handleing');
        fetch(`/api/user_category`, {
           method: "GET",
           credentials: "include",
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
           }
         })
           .then(res => res.json())
           .then(cats => {
             console.log('ressy', cats);
             this.setState({user_cats: cats})
           })
      }

  render() {

     const CategoryItems =

     this.state.categories.map((category, i)=> {
        return (
           <CategoryListItem key={i} data={i + 1} category={category} user_cats={this.state.user_cats}
           handler={this.handler}
            />
        )
     })

    return (
      <div>
        <nav className="navbar">
          <Link to="/feed" title="Feed Page" className="fa fa-arrow-circle-right fa-5x navCatRight" aria-hidden="true"></Link>
          <div className="dropdown">
            <i className="glyphicon glyphicon-align-justify dropdown-toggle" type="" data-toggle="dropdown"></i>
            <ul className="dropdown-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/feed">Feed</Link></li>
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Log Out</Link></li>
            </ul>
          </div>
        </nav>
        <h1 className="animated flipInY pageheader">Event Categories</h1>
        <p className="animated bounceInLeft catSlogan">click on any event categories to populate your event feed</p>
         <div className="categoryItems animated bounceInLeft">
            { CategoryItems }
        </div>
      </div>
       )
  }
}

export default CategoryList
