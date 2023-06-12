import React, {useEffect} from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    })

    return (
        <div name="about" className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>

                        <h2 className='text-4xl font-bold inline border-b-4 border-gray-500 text-yellow-500'>About</h2>

                </div>

                    <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-10 ease-in fade-in'>
                    As a highly motivated 3rd-year B.Tech student, I am passionate about leveraging my technical skills and knowledge to contribute to the field of Web Developement amd Designing. With a strong foundation in subjects like Html, Css, React, I possess a solid understanding of core concepts and their practical applications. Alongside my academic pursuits, I actively engage in various extracurricular activities, including Recitation,  Anchoring and Extempore, which have honed my leadership and teamwork abilities. I am an adaptable and fast learner, always seeking new challenges to expand my horizons.
                    </p>
                <br />

                    <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    My goal is to collaborate with industry professionals and organizations to gain hands-on experience and make a meaningful impact. Connect with me to explore Potential opportunities and collaborations in the dynamic world of technology.
                    </p>
                    <div data-aos="zoom-in" data-aos-duration="500" className=' fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-5 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="./Resume_Barsha Sadhu.pdf" download>Download CV</a>
                    </div>
            </div>
        </div>
    )
}

export default About