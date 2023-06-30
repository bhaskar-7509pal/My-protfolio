import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    })
    return (
        <div name='contact' className='w-full h-full bg-gradient-to-b from-gray-800 to-black p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400 text-orange-300'>Contact Me</p>
                    <p className='mt-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/4c5316ea-8d0a-454b-b414-8f2296b4a4b6" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input data-aos="slide-up" data-aos-duration="500" required type="text" name='name' placeholder='Enter your name' className='p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input data-aos="slide-up" data-aos-duration="700" required type="email" name='email' placeholder='Enter your e-mail' className='p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea data-aos="fade-in" data-aos-duration="900" name="message" required rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 m-2 rounded-md text-white focus:outline-none'></textarea>
                        <button data-aos="zoom-in" data-aos-duration="1000" type="submit" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact