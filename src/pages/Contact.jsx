import React, {  useState } from 'react'
import {  toast } from 'react-hot-toast';

const Contact = () => {


  const myform ={
    username:"",
    email:"",
    message:""
  }
  const [formdata,setFormData]=useState({ myform })

  // function for handling form data
  function handledata(event){
    const{name,value} =event.target;

    setFormData(prev=>({...prev,[name]:value}))
   
  }

  // function for submitting data
  function handleSubmit(event)
  {
    event.preventDefault();
    
    console.log(formdata)
    setFormData(myform)
    
    toast.success("Successfull")
  }

  return (
   <>
    <div className='w-full'>
        <div className='mt-14 grid gap-8'>
            <h2 className='text-center font-bold text-2xl'>Feel Free to Contact Us</h2>


            {/* google-map */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.976091077051!2d74.8096276!3d34.070127150000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f96b387110d%3A0x3f279be250eb08ff!2sLal%20Chowk%2C%20Srinagar%20190001!5e0!3m2!1sen!2sin!4v1682511790792!5m2!1sen!2sin"
             width="100%" height="400" 
              allowFullScreen="" 
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade">
             </iframe>


             {/* Contact-form */}

             <div>
                <div className=' mx-auto max-w-3xl p-10 bg-gray-200 shadow-2xl rounded-md'>
                    <form action="https://formspree.io/f/mvondyly" method='POST'
                    
                     className='flex flex-col gap-8 'onSubmit={handleSubmit} >

                    <input 
                    className='cursor-pointer p-3  rounded-lg outline-none'
                      type="text" 
                      placeholder='Username' 
                      name='username' 
                      id='username'
                      required
                      value={formdata.username}
                    autoComplete='off'
                    onChange={handledata}
                    />
                    
                    <input
                      className='cursor-pointer p-3 rounded-lg outline-none'
                     type="email"
                     name='email'
                     placeholder='Email'
                     autoComplete='off'
                     value={formdata.email}
                     onChange={handledata}
                     required
                      />

                    <textarea
                       className='cursor-pointer p-3 rounded-lg outline-none'
                       rows="5"
                     name="message"
                     id='message'
                     cols="10"
                     placeholder='Enter your message'
                     value={formdata.message}
                     onChange={handledata}
                      required
                      autoComplete='off'
                     ></textarea>
                      
                      <button className='bg-blue-800 w-fit text-lg font-bold pl-3 pt-2 pb-2 border-blue-900 border-b-2 hover:bg-blue-600 pr-3 text-white rounded-lg'>Submit</button>
                    </form>
                </div>
             </div>
        </div>
    </div>
   </>
  )
}

export default Contact
