import React from 'react'

const Post = () => {
  return (
    <div class="max-w-xl mx-auto mt-8">
    <div class="bg-white p-4 rounded-lg shadow-md mb-4">
        <textarea class="w-full border rounded-md p-2 mb-2" placeholder="Write something..." rows="3"></textarea>
        <input type="file" class="mb-2"/>
        <button class="bg-blue-500 text-white py-2 px-4 rounded-md">Post</button>
    </div>

    <div class="bg-white p-4 rounded-lg shadow-md mb-4">
        <div class="flex items-center mb-4">
            <img src="https://via.placeholder.com/50" alt="User Avatar" class="rounded-full mr-2"/>
            <div>
                <h2 class="text-lg font-semibold">John Doe</h2>
                <p class="text-gray-600">Software Engineer</p>
            </div>
        </div>
        
        <p class="mb-4">This is a sample post</p>

        <img src="https://via.placeholder.com/400" alt="Post Image" class="mb-4 rounded-md"/>

        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
                <button class="flex items-center mr-4">
                    👍
                </button>
                <button class="flex items-center mr-4">
                    ❤️
                </button>
                <button class="flex items-center">
                    😍
                </button>
            </div>
            <button class="text-gray-600">10 comments</button>
        </div>

        <div>
            <div class="flex items-start mb-2">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="rounded-full mr-2"/>
                <div>
                    <p><span class="font-semibold">Jane Doe</span> Awesome</p>
                    <p class="text-xs text-gray-600">2h ago</p>
                </div>
            </div>
          
            <div class="flex items-center mt-2">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="rounded-full mr-2"/>
                <input type="text" class="border rounded-md w-full p-2" placeholder="Write a comment..."/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Post