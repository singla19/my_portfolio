import React from 'react';
import './About.css';
import { GiGraduateCap } from 'react-icons/gi';
import { BsBookmarkStar } from 'react-icons/bs';

const About = () => {
  return (
    <section id='about'>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiGraduateCap className='about__icon' />
              <h5>Degree</h5>
              <small>B.Tech. Computer Science (UG) <br/>Delhi Technological University.</small>
            </article>

            <article className='about__card'>
              <BsBookmarkStar className='about__icon' />
              <h5>CGPA</h5>
              <small>8.85</small>
            </article>
          </div>

          <p>
            I'm a Second year <b>Computer Science Engineering Undergraduate</b> at Delhi Technological University. 
            I'm an enthusiastic student seeking a challenging internship opportunity to apply 
            and expand my technical skills. 
            With a strong academic foundation in various fields and hands-on experience in various programming languages,
            I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
          </p>

          <h3>Skills</h3>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>C++</li>
            <li>Machine Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
