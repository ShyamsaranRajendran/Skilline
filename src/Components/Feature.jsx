import React from 'react'
import "./css/feature.css"
import F1 from "../assets/F1.png"
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F4 from "../assets/F4.png";
import F5 from "../assets/F5.png";
import icon7 from "../assets/icon7.svg"
import icon8 from "../assets/icon8.svg";
import icon9 from "../assets/icon9.svg";
function Feature() {
  return (
    <div className="feature">
      <h2 className="bluebrown">
        Our <span color="brown">Features</span>
      </h2>
      <p>
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      <div className="featuredgrid">
        <img src={F1} alt="" />
        <div className="Contents">
          <h2 className="bluebrown-1">
            A <span>user interface</span> designed for the classroom
          </h2>
          <div className="feature-data">
            <img src={icon8} alt="" />
            <p>
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </p>
          </div>
          <div className="feature-data">
            <img src={icon7} alt="" />
            <p>
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </p>
          </div>
          <div className="feature-data">
            <img src={icon9} alt="" />
            <p>
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </p>
          </div>
        </div>
      </div>
      <div className="featuredgrid">
        <div className="Contents">
          <h2 className="bluebrown-1">
            <span>Tools</span> For Teachers And Learners
          </h2>
          <p className="para">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>

        <img src={F2} alt="" />
      </div>
      <div className="featuredgrid">
        <img src={F3} alt="" />
        <div className="Contents">
          <h2 className="bluebrown-1">
            Assessments, <span>Quizzes, Tests</span>
          </h2>
          <p className="para">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>
      <div className="featuredgrid">
        <div className="Contents">
          <h2 className="bluebrown-1">
            Class Management <span>Tools for Educators</span>
          </h2>
          <p className="para">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </div>
        <img src={F4} alt="" />
      </div>
      <div className="featuredgrid">
        <img src={F5} alt="" />
        <div className="Contents">
          <h2 className="bluebrown-1">
            One-on-One <span> Discussions</span>
          </h2>
          <p className="para">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>

      <button className='seemore'>See More Features</button>
    </div>
  );
}

export default Feature