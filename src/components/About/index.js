import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout( ()=>{
          setLetterClass('text-animate-hover')
        }, 3000 )
        return
      }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                </h1>
                <p>
                    I am the Technical Head at Indian Institute of Technology and a student of Computer Engineering Department.
                </p>
                <p>After holding many leadership positions these are the things I have found out about myself:
                    {/* <br /> */}
                    I love Problem solving and meeting new people to hear their perspectives
                    {/* <br /> */}
                    I can align, lead and grow excellent teams
                    {/* <br /> */}
                    I keep on educating myself and make clear decisions in tough times
                    {/* <br /> */}
                    I stay calm when faced with an adversity and try to chalk out a solution
                 </p>
                <p>
                    I'm a very Ambitious Developer looking for Projects and roles in established companies with the latest technologies working on challenging problems.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#28a4d9"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGithub} color="#8e8e8e"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color="#3C873A"/>
                    </div>
                </div>
            </div>
        </div>

            <Loader type='pacman'/>
        </>
    )
}

export default About