import React from 'react';


const ImageCard = ({image}) => {
  
  const tags = image.tags.split(',');

  return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 ml-10">

        <img src={image.webformatURL}alt="hero-img" className="w-full"/>

        <div className="px-6 py-4">
          <div className="font-bold tx-xl mb-2 text-purple-500">
            Photo by {image.user}
          </div>

        <ul>
        <li>
          <strong>Views:</strong>
          {image.views}
        </li>
        <li>
          <strong>Downloads:</strong>
          {image.downloads}
        </li>
        <li>
          <strong>Likes:</strong>
          {image.likes}
        </li>
        </ul>

        </div>


        <div className="px-6 py-4">

          {tags.map ( (tag, index) =>(
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{tag}
            </span>
          ))}

        </div>

        </div>

    )      
    
}

export default ImageCard