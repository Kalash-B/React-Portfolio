import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section id="Home" className="z-10 w-full min-h-screen flex items-center justify-around px-4 bg-transparent text-white text-center">
      <div className="max-w-2xl w-full flex flex-col items-center gap-6">
      {/* Image */}
        <div className="relative mb-6 w-full group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQF6mzEjiudvIQ/profile-displayphoto-shrink_200_200/B4DZdf82o5HkAY-/0/1749661478519?e=2147483647&v=beta&t=DN_HnGQNzuUS5BmrX7AHtqeETWkPya5jPJ4aLs750uQ" alt="Kalash Sachin Baldota" className="relative w-96 h-96 md:w-60 md:h-60 rounded-full border-4 border-white/20 shadow-2xl mx-auto object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        
        {/* Name */}
        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Kalash Baldota</h1>

        {/* Typing Effect */}
        <h2 className="text-xl sm:text-2xl font-extralight text-white">
            <Typewriter
                words={['Full Stack Web Developer', 'Machine Learning Enthusiast', 'Problem Solver']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={1500}
            />
        </h2>


        {/* About */}
        <p className="text-xl sm:text-md text-gray-300 max-w-7xl">
          Passionate <span className="text-blue-400 font-semibold">Information Technology Student</span>. Building innovative solutions with clean code and modern technologies.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="#projects"
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 animate-pulse-glow"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="group-hover:animate-bounce" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
            </svg>
            View My Work
          </a>
          <button className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="group-hover:animate-bounce" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
            </svg>
            Download Resume
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8">
            <a href="https://github.com/Kalash-B" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-gray-300 transition-all duration-300 transform hover:scale-125" aria-label="GitHub">
                    <div className="relative">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="text-3xl md:text-4xl group-hover:animate-pulse" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                            </path>
                        </svg>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300">
                        </div>
                    </div>
            </a>
            {/* <a href="https://gitlab.com/Chitti333" target="_blank" rel="noopener noreferrer" class="group text-gray-400 hover:text-orange-400 transition-all duration-300 transform hover:scale-125" aria-label="GitLab">
                <div class="relative">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" class="text-3xl md:text-4xl group-hover:animate-pulse" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z">
                        </path>
                    </svg>
                    <div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300">
                    </div>
                </div>
            </a> */}
            <a href="https://www.linkedin.com/in/kalash-baldota-290b43281" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125" aria-label="LinkedIn">
                <div className="relative">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-3xl md:text-4xl group-hover:animate-pulse" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                        </path>
                    </svg>
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300">
                    </div>
                </div>
            </a>
            <a href="mailto:kalashbaldota604@gmail.com" target="_blank" rel="noopener noreferrer" className="group text-gray-400 hover:text-red-400 transition-all duration-300 transform hover:scale-125" aria-label="Email">
                <div className="relative">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-3xl md:text-4xl group-hover:animate-pulse" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                        </path>
                    </svg>
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300">
                    </div>
                </div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
