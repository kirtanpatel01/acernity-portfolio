'use client'
import React, { useState } from 'react'
import { toast } from 'sonner'

function ContactForm() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    const { name, email, message } = formData;

    if(!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("API Call successfully");
      }, 1000);
    })

    if(response) {
      toast.success("Submit successfully");
    } else {
      toast.error("Submittion failed")
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 py-10 max-w-lg mx-auto'>
      <label
        htmlFor="name"
        className='text-sm font-medium tracking-tight text-neutral-600'
      >
        Full Name
      </label>
      <input
        type="text"
        placeholder='Kiton Patel'
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        className='shadow-aceternity rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none focus:ring-primary'
      />

      <label
        htmlFor="email"
        className='text-sm font-medium tracking-tight text-neutral-600'
      >
        Email
      </label>
      <input
        type="email"
        placeholder='kiton@gmail.com'
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        className='shadow-aceternity rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none focus:ring-primary'
      />

      <label
        htmlFor="message"
        className='text-sm font-medium tracking-tight text-neutral-600'
      >
        Message
      </label>
      <textarea
        rows={5}
        placeholder='Write something meaningful '
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        className='shadow-aceternity rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none focus:ring-primary resize-none'
      />

      <button type='submit' className='cursor-pointer bg-primary text-white px-4 py-2 rounded-md shadow-md'>Send</button>
    </form>
  )
}

export default ContactForm