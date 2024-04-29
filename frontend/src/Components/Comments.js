import React, { useState } from 'react';

// Define a Comment component
const Comment = ({ comment }) => {
 
  const [displayedReplies, setDisplayedReplies] = useState(0);

 
  const handleShowMoreReplies = () => {
    setDisplayedReplies(prevCount => prevCount + 2);
  };

  return (
    <div className="flex flex-col p-4 rounded-md ">
      <div className='flex flex-row'>
        <img className='h-12 w-12' src="https://cdn-icons-png.freepik.com/512/10302/10302971.png" alt="user-avatar" />
        <div className='flex flex-col bg-slate-200 rounded-lg p-2 mx-2'>
          <span className="text-gray-700 font-semibold">{comment.author}</span>
          <span className="text-gray-800">{comment.content}</span>
        </div>
      </div>
      <div className='mx-16'>
        <span className='mx-2'>Like</span>
        <span>|</span>
        <span className='mx-2'>Reply</span>
      </div>
      
      {comment.replies.length > 0 && (
        <div className="pl-4 ml-4 border-gray-300 m-2 mb-4">
          {comment.replies.slice(0, displayedReplies).map(reply => (
            <div className='flex flex-col'>
            <div key={reply.id} className="flex flex-row m-2">
              <img className='h-8 w-8' src="https://cdn-icons-png.freepik.com/512/10302/10302971.png" alt="user-avatar" />
              <div className="flex flex-col bg-slate-200 rounded-lg p-2 mx-2">
                <span className="text-gray-700 font-semibold">{reply.author}</span>
                <span className="text-gray-800">{reply.content}</span>
              </div>
            </div>
           
            <div className='mx-14 -mt-2'>
        <span className='mx-2'>Like</span>
        <span>|</span>
        <span className='mx-2'>Reply</span>
      </div>

            </div>
          ))}
          {/* Show "Show More Replies" button if there are more replies */}
          {displayedReplies < comment.replies.length && (
            <button className="text-blue-500 mx-4 text-sm" onClick={handleShowMoreReplies}>
              {displayedReplies===0 ? "Show Replies" : "Show More Replies"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// Define the main Comments component
const Comments = ({ comments }) => {

  const commentsData = [
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        },
        {
          id: 901234,
          author: "AliceBrown",
          content: "I respectfully disagree. JSON is more lightweight and easier to read.",
          replies: []
        },
        {
          id: 901234,
          author: "AliceBrown",
          content: "I respectfully disagree. JSON is more lightweight and easier to read.",
          replies: []
        },
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      id: 123456,
      author: "JohnDoe",
      content: "This is a sample comment. JSON is great for structuring data!",
      replies: [
        {
          id: 789012,
          author: "JaneSmith",
          content: "I agree! JSON is very versatile.",
          replies: []
        },
        {
          id: 345678,
          author: "BobJohnson",
          content: "Actually, XML is better for some use cases.",
          replies: [
            {
              id: 901234,
              author: "AliceBrown",
              content: "I respectfully disagree. JSON is more lightweight and easier to read.",
              replies: []
            },
            {
              id: 567890,
              author: "CharlieGreen",
              content: "XML has its strengths, but JSON's simplicity is hard to beat.",
              replies: [
                {
                  id: 901234,
                  author: "AliceBrown",
                  content: "I respectfully disagree. JSON is more lightweight and easier to read.",
                  replies: []
                },
              ]
            }
          ]
        }
      ]
    }
  ];


  const [displayComment, setDisplayComment] = useState(5);


  const handleShowMoreComments = () => {
    setDisplayComment(prevCount => prevCount + 3);
  };

  return (
  <div className='bg-slate-50 m-1 rounded-xl'>
    
    {commentsData.slice(0, displayComment).map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}

    {displayComment < commentsData.length && (
            <button className="text-blue-500 mt-2 text-sm mx-4 mb-3" onClick={handleShowMoreComments}>
              Show More Comments
            </button>
          )}
  </div>
  )
};

export default Comments;
