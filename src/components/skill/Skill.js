import React from 'react';
import './SkillStyles.css';
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import boot from '../../assets/boot.png'
import git from '../../assets/git.png'

const Skills = () => {
    return (
     <>
     <div className='inner'/>
      <div className='header'>
        <h1>My <span>Skills</span></h1>
      </div>
      <div className='container-r'>
        <div className='skill-box'>
            <div className='skill-title'/>
                <div className='img'>
                <img src={html} alt="Project 1"  className='skill-icon'/>
                </div>
                <h3>HTML 5</h3>
        <p className='p-cl'>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
        </div>


        <div className='skill-box'>
            <div className='skill-title'/>
                <div className='img'>
                <img src={css} alt="Project 1" className='skill-icon'/>
                </div>
                <h3>CSS 3</h3>
        <p className='p-cl'>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
        </div>


        <div className='skill-box'>
            <div className='skill-title'/>
                <div className='img'>
                <img src={js} alt="Project 1" className='skill-icon'/>
                </div>
                <h3>JavaScript</h3>
        <p className='p-cl'>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
        </div>




        <div className='skill-box'>
            <div className='skill-title'/>
                <div className='img'>
                <img src={boot} alt="Project 1" className='skill-icon'/>
                </div>
                <h3>Bootstrap</h3>
        <p className='p-cl'>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
        </div>


        <div className='skill-box'>
            <div className='skill-title'/>
                <div className='img'>
                <img src={git} alt="Project 1" className='skill-icon'/>
                </div>
                <h3>Github</h3>
        <p className='p-cl'>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
        </div>


        <div className='skill-box'>
            <div className='skill-title'/>
                <div className='img'>
                <img src={react} alt="Project 1" className='skill-icon'/>
                </div>
                <h3>React Js</h3>
        <p className='p-cl'>laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga </p>
        </div>


      </div>

     
     
     </>
    );
  }
  
  export default Skills;