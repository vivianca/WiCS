import React, { Component } from 'react';
import PropTypes from 'prop-types';
import settings from './settings.png';
import './App.css';

var LESSONS = [
  {
    name: "Logistic Growth",
    subject: "AP Calculus AB, 3rd Period",
    date: "February 7, 2018",
    reviewer: "Emilia Jensen",
    reviwed: true,
  },
  {
    name: "Review",
    subject: "AP Calculus AB, 3rd Period",
    date: "February 3, 2018",
    reviewer: "Emilia Jensen",
    reviwed: true,
  },
  
]

class LessonList extends Component {
  render() {
    var namesList = this.props.lessons.map(lesson => { 
      return <div> 
      <div className = "lessonName"> {lesson.name} </div> 
      <div className = "lessonSubject"> {lesson.subject} </div>
      <div className = "lessonDate"> {lesson.date} </div>
      <div className = "lessonReviewer"> Reviewed By: {lesson.reviewer} </div>
      <button className = "feedbackPendingButton"> Feedback Pending </button>
      <hr/>
      </div>
    })
    return (
      <div className = "LessonList">
        <h1 className= "Lesson-title"> Lessons </h1>
          <hr/>
        <div className = "Lesson-details"> 
          {namesList}
        </div>

      </div>
    );   
  }
};

LessonList.propTypes = {
  lessons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    subject: PropTypes.string
  })
  )
}


var MENTORS = [
  {
    name: "Georgio Karr",
    school: "Rye Country Day High",
    subject: "AP Calculus BC (Juniors, Seniors)",
    date: "2008 - Present",
    quote: "Georgio was extremely helpful in catching when and why my students' attention started wandering.",
  },
  {
    name: "Emily Fischer",
    school: "Bing Nursery",
    subject: "All-Day Preschool",
    date: "2016 - Present",
    quote: "Emily has great methods for classroom management and she was extremely helpful especially in my first year teaching!",
  },
  {
    name: "Lisa Washington",
    school: "Forest Point High",
    subject: "AP Calculus BC (Juniors, Seniors)",
    date: "2005 - Present",
    quote: "Lisa is extremely experienced and has a great track record with her subject material. Her feedback transformed my learning!",
  },
  
]

class MentorList extends Component {
  render() {
    var namesList = this.props.mentors.map(mentor => { 
      return <div> 
      <div className = "mentorName"> {mentor.name} </div> 
      <div className = "mentorSchool"> {mentor.school} </div>
      <div className = "mentorSubject"> {mentor.subject} </div>
      <div className = "mentorDate"> ({mentor.date}) </div>
      <div className = "mentorQuote"> {mentor.quote} </div>
      <button className = "connectButton"> Connect </button>
      <hr/>
      </div>
    })
    return (
      <div className = "MentorList">
        <div className = "Mentor-details"> 
          {MentorList}
        </div>

      </div>
    );   
  }
};

MentorList.propTypes = {
  mentors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    subject: PropTypes.string
  })
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            TeachConnect 
          </h1>
          <div className = "Settings">
              <img src={settings} alt={'settings'} width="30" height="30"/>
          </div>
        </header>
        <hr/>

        <div className="App-body">
          <LessonList lessons = {LESSONS}/>

          <div className="Meetings-List">
            <h1 className= "Meetings-title"> Upcoming Meetings </h1>
              <hr/>
          </div>

          <div className="Mentors-List">
            <h1 className= "Mentors-title"> Mentors </h1>
              <hr/>
          </div>

        </div>

        <div className = "App-Popup">
            <header className="Popup-header">
                <h1 className="Popup-title">
                    Find Mentors
                </h1>
            </header>
            <hr/>
        
            <div className="Popup-body">
                <MentorList mentors = {MENTORS}/>
        
                <div className="Mentors-List">
                </div>
            </div>
        </div>
        
      </div>
        
        


    );
  }
};


export default App;