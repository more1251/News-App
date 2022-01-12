import React from 'react'


const About = () => {
    return (
        <div className="about-container">
            <h1 className='text-center'>About Us</h1>

            <div className="row-container">

                <p>We are Daily Bugle we provide You with Daily top Headlines. Evey Day get Fresh News and get updated daily. Star your day with our morning bugle with the Latest news at your Finger tips and clicks</p>

                <img src="images/dailynews.svg" alt="" />

            </div>

            <div className="social-icons">
                <h1 className='text-center text2'>Follow us at</h1>

                <p>  
                    <a target="_blank" rel="noreferrer" href="https://twitter.com"><i className="fab fa-twitter fa-2x"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com"><i className="fab fa-facebook-f fa-2x"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com"><i className="fab fa-instagram fa-2x"></i></a>
                </p>
            </div>
        </div>

    )
}

export default About
