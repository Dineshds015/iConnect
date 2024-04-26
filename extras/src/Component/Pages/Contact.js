import React from 'react'
import cnt from '../Image/cnt.jpg';
const Contact = () => {
  return (
    <div className = 'bg-slate-100'>
      <div className = 'mx-[100px] md:flex bg-white shadow-xl h-screen' >
        <div className="p-8 rounded shadow-lg ml-30 md:w-[600px] mt-[100px]">
            <h2 className="text-4xl text-slate-600 font-bold mb-4 ">Contact Us</h2>
            <form>
              <div className="mb-4 mt-10">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
        </div>
        <div>
          <img src = {cnt} alt = "contact" className = 'h-[600px] w-[900px] mt-10'/>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
