import React from 'react';
import profileImg from '../assets/profile.jpg'; 
import linkedinIcon from '../assets/linkedin.png'; 
import githubIcon from '../assets/github.png'; 
import codeforcesIcon from '../assets/cf1.png';  // Import the Codeforces logo
import resumePdf from '../assets/samia_alam_resume1.pdf'; 
import '../CSS/Profile.css';

function Profile() {
  return (
    <section id="profile">
      <div className="profile-container">
        
        {/* First Profile Box */}
        <div className="profile-box">
          {/* Profile Picture */}
          <div className="section__pic-container">
            <img src={profileImg} alt="Samia Alam's profile picture" />
          </div>

          {/* Profile Details */}
          <div className='details'>
            <h1 className="title-main">Samia Alam</h1>
            <h2 className="section__text__p2">Frontend Developer and Problem Solver</h2>
          </div>

          {/* Buttons */}
          <div className="button-box">
            <button
              className="btn btn-color-2"
              onClick={() => window.open(resumePdf, 'samia_alam_resume1.pdf')}
            >
              Download CV
            </button>
            <button
              className="btn-1"
              onClick={() => window.location.href = 'mailto:samiajucse@gmail.com'}
            >
              Email
            </button>
          </div>

          {/* Social Icons */}
          <div className="socials-container">
            <img
              src={linkedinIcon}
              alt="LinkedIn profile"
              className="icon"
              onClick={() => window.location.href = 'https://www.linkedin.com/in/samia-alam-a99435276/'}
            />
            <img
              src={githubIcon}
              alt="GitHub profile"
              className="icon"
              onClick={() => window.location.href = 'https://github.com/jucse-29'}
            />
            <img
              src={codeforcesIcon}
              alt="Codeforces profile"
              className="icon"
              onClick={() => window.location.href = 'https://codeforces.com/profile/__Samia__'}
            />
          </div>

          {/* Phone Number */}
          <div className="contact-info">
            <p>Phone: <a href="tel:+8801308428174">+880 130-842-8174</a></p>
          </div>
        </div>

        {/* Second Profile Box: Bio */}
        <div className="profile-box-2">
          <p>
            Hi, I’m Samia Alam. I’m originally from Barishal but currently based in Dhaka, 
            pursuing my graduation in Computer Science and Engineering from 
            Jahangirnagar University. I have a deep passion for coding and enjoy 
            exploring new tools every day. My approach to life is rooted in patience 
            and hard work, as I continuously strive to reach my goals.
          </p>
          <p>
            I take pride in balancing my academic responsibilities with other skill 
            development, and I aspire to become a software engineer. In my free time, 
            I enjoy reading books, taking care of my plants, and spending time with my pet.
          </p>
          <p>
            I had the opportunity to volunteer at NCPC-23, and I've also participated 
            in various competitions, including math olympiads and competitive programming 
            contests such as NGPC, ICPC, and NCPC.
          </p>
          <p>
            Additionally, I love both learning and teaching. I work as a tutor, 
            which not only enhances my own confidence but also brings me great 
            pleasure in helping others learn.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
