import React from "react";
import vg from "../assets/zoro.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>ZORO</h1>
          <p>NEVER LOST</p>
        </main>
      </div>
      <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            
                  <b>
                  Roronoa Zoro from One Piece:

                  </b>
                  </p>

                  <p>
                  <b>
                                        
“A true swordsman would rather die standing than live kneeling.” 🗡️🔥
                  </b>
                  

            
       
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
            <h1>ONE PIECE</h1>
        <p>
          <b>
            One Piece is an epic adventure story about a young pirate named Monkey D. Luffy 
            who dreams of becoming the Pirate King by finding the legendary treasure called 
            the “One Piece.” Along with his loyal crew, the Straw Hat Pirates, Luffy sails
             across the dangerous Grand Line, facing powerful enemies, mysterious islands,
              and world-changing secrets. The series beautifully blends action, comedy,
               emotion, and deep storytelling, highlighting themes of friendship, freedom,
                loyalty, and never giving up on your dreams. Each character has a unique goal, 
                and together they grow stronger while protecting each other. One Piece is not
                 just about pirates—it is about chasing dreams with courage and living life without regrets
          </b>
        </p>
        </div>
      </div>

           <div className="home4" id="brands">
        <div>
          <h1>CONNECT ME</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
               <a href="https://www.linkedin.com/in/ujjwal-ahlawat-48523b360" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
              <p>Linkedin</p>
              </a>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <a href="https://github.com/ujjwal-alhawath" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
              <p>GitHub</p>
              </a>
            </div>


            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <a href="https://www.instagram.com/ujjwal_616?igsh=ZWNhZzcwNXdvZWlh" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram />
              <p>Instagram</p>
              </a>
            </div>
          </article>
        </div>
      </div>

     
    </>
  );
};

export default Home;
