import React from 'react'

const ScrollableChat = () => {

    // const messages = null
    const messages =  [
        {
          "id": 1,
          "sender": "John Doe",
          "content": "Hey there!"
        },
        {
          "id": 2,
          "sender": "You",
          "content": "Hi! How can I help you?"
        },
        {
          "id": 3,
          "sender": "John Doe",
          "content": "I'm looking for some information about your products."
        },
        {
          "id": 4,
          "sender": "You",
          "content": "Sure, I'd be happy to assist you with that."
        },
        {
          "id": 5,
          "sender": "John Doe",
          "content": "Great! I'm particularly interested in your electronics section."
        },
        {
          "id": 6,
          "sender": "You",
          "content": "We have a wide range of electronics including smartphones, laptops, and smartwatches."
        },
        {
          "id": 7,
          "sender": "You",
          "content": "Is there anything specific you're looking for?"
        },
        {
          "id": 8,
          "sender": "John Doe",
          "content": "I'm actually interested in the latest smartphone models."
        },
        {
          "id": 9,
          "sender": "You",
          "content": "We have the latest models from top brands with various features and price points. Let me know if you'd like more details."
        },
        {
            "id": 1,
            "sender": "John Doe",
            "content": "Hey there!"
          },
          {
            "id": 2,
            "sender": "You",
            "content": "Hi! How can I help you?"
          },
          {
            "id": 3,
            "sender": "John Doe",
            "content": "I'm looking for some information about your products."
          },
          {
            "id": 4,
            "sender": "You",
            "content": "Sure, I'd be happy to assist you with that."
          },
          {
            "id": 5,
            "sender": "John Doe",
            "content": "Great! I'm particularly interested in your electronics section."
          },
          {
            "id": 6,
            "sender": "You",
            "content": "We have a wide range of electronics including smartphones, laptops, and smartwatches."
          },
          {
            "id": 7,
            "sender": "You",
            "content": "Is there anything specific you're looking for?"
          },
          {
            "id": 8,
            "sender": "John Doe",
            "content": "I'm actually interested in the latest smartphone models."
          },
          {
            "id": 9,
            "sender": "You",
            "content": "We have the latest models from top brands with various features and price points. Let me know if you'd like more details."
          }
  
      ]
    
  return (
    <div className='overflow-x-hidden overflow-y-auto  h-full px-4'>
    { messages && messages.map((message,idx) => (
        <div className={`flex ${message.sender==="John Doe"? "justify-start": "justify-end"}`} key={idx}>
        <span className={`flex-shrink-0 ${message.sender === "John Doe" ? 'bg-blue-200' : 'bg-green-300 text-gray-800'} py-2 px-3 rounded-lg max-w-[75%] my-2 `}>{message.content}</span>
        </div>
    ))

    }
      
    </div>
  )
}

export default ScrollableChat
