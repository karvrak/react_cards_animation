import { imageStyleOverview, containerAnime, CardAnime, ContentAnime, GlowAnime } from '../config/style';
import React, { useRef } from 'react';

export function Card({imageId}) {

  const cardRef = useRef();
  
  const handleMouseMove = (e) => {
    let elRect = cardRef.current.getBoundingClientRect();

    let x = e.clientX - elRect.x;
    let y = e.clientY - elRect.y;

    let midCardWidth = elRect.width / 2;
    let midCardHeight = elRect.height / 2;

    let angleY = -(x - midCardWidth) / 7;
    let angleX = (y - midCardHeight) / 7;

    let glowX = x / elRect.width *100;
    let glowY = y / elRect.height *100;    


    cardRef.current.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    cardRef.current.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    cardRef.current.children[1].style.background = `radial-gradient(circle at ${glowX}%${glowY}%, rgb(184, 196, 211), transparent`;
    
  };

  const handleMouseLeave = (e) => {
    cardRef.current.children[0].style.transform = `rotateX(0) rotateY(0)`;
    cardRef.current.children[1].style.transform = `rotateX(0) rotateY(0)`;

  };


  return (
      <div ref={cardRef} style={CardAnime} id={imageId} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div style={ContentAnime} >
           
            <img 
              style={imageStyleOverview} 
              src={`${process.env.PUBLIC_URL}/assets/Cards/C${imageId}.jpg`} 
              alt={`card ${imageId}`} 
              
            />   
          </div>
          <div style={GlowAnime}> </div>  

        </div>  
        
  );
}