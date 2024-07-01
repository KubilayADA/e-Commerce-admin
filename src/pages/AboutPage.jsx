import profileIcon from "../assets/images/profile-icon.png"
import { Link } from "react-router-dom";
const AboutPage = () => {
    return ( 
    <div className="about-page">

        <h3>About Page</h3> /*toDo: add content to About page and styling */
        <p> A page showing the project description and information about the team members (students) working on the project, 
                including links to your GitHub and LinkedIn profiles.</p>
        <div>
            <h5>Name01</h5>
            <img src={'' || profileIcon} alt="profile-photo"/>
        </div>

        <div className="x">
              <p className="xx">
                <strong>LinkedIn:</strong>{" "}
                <a 
                  href='linkedin Url'
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <span> 'Email here'</span>
              </p>

              <p>
                <strong>Languages:</strong>{" "}
                'languages here'
              </p>
        </div>

                    {/* Back button */}
        <Link to = "/">
            <button type = "button"> Back </button>
        </Link>

    </div>


     );
}
 
export default AboutPage;


    
      