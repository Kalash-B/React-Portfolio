import React from 'react'
import { Link } from "react-scroll";

const WebFooter = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('nav-bar');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='w-full bg-gradient-to-br from-slate-900 to-slate-900 text-white'>
       <footer className="flex flex-col w-full justify-center items-center pb-10">
      <p className="text-xs text-gray-300">Kalash Baldota © 2024</p>
      <div className="black-logo my-4">
      <Link
                    to="Home"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer"
                  >
                  <svg className="text-black md:font-bold md:text-[#ab7346]" width="40" height="44" viewBox="0 0 163 204" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.5714 1L1 34.0862V203H33.8571C37.2857 203 37.1905 200.678 36.7143 199.517V149.017L31 154.241V115.931L49.5714 114.19L122.429 203H161L82.4286 107.224L161 9.7069H122.429L63.8571 81.1034H38.1429L31 93.2931V2.74138L29.5714 1Z" stroke="pink" strokeOpacity="0.9" strokeWidth="10"></path><path d="M1 203V34.0862L29.5714 1L31 2.74138V93.2931L38.1429 81.1034H63.8571L122.429 9.7069H161L82.4286 107.224L161 203H122.429L49.5714 114.19L31 115.931V154.241L36.7143 149.017V199.517C37.1905 200.678 37.2857 203 33.8571 203M1 203C10.5238 203 30.4286 203 33.8571 203M1 203H33.8571" stroke="url(#paint0_linear)" strokeWidth="10"></path><defs><linearGradient id="paint0_linear" x1="205.549" y1="20.0169" x2="204.338" y2="342.461" gradientUnits="userSpaceOnUse"><stop stopColor="blue"></stop><stop offset="1" stopColor="purple" stopOpacity="0"></stop></linearGradient></defs></svg>
                  </Link>
      </div>
      <ul className="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
        <li>
          <a href="https://www.linkedin.com/in/kalash-baldota-290b43281/" target="_blank">
            <svg
              className="w-5 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <svg
              className="w-5 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kalash_baldota/">
            <svg
              className="w-5 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="mailto:bkalash604@gmail.com" target="_blank">
            <svg
              className="w-5 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              ></path>
            </svg>
          </a>
        </li>
        
      </ul>
    </footer>
    </div>
  )
}

export default WebFooter