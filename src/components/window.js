import React from "react";
import "98.css";

import "./Window.css";

function Window() {
  return (
    <div class="window" style={{ width: 1200, height: 1500 }}>
      <div class="title-bar">
        <div class="title-bar-text">A Window With Stuff In It</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <header>
          {/* <!-- Header with name --> */}
          <div class="header">
            <h1>Ethan D'Mello</h1>
          </div>
          <nav>
            {/* <!-- Navigation section --> */}
            <div class="links">
              <a class="navLinks" href="#aboutMeHeader">
                About Me
              </a>
              <a class="navLinks" href="#myProjects">
                My Projects
              </a>
              <a class="navLinks" href="#contactMe">
                Contact Me
              </a>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Window;
