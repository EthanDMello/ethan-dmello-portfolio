import React from "react";
import "98.css";

// import "./Window.css";

function Window() {
  return (
    <div class="window" style={{ width: 700 }}>
      <div class="title-bar">
        <div class="title-bar-text">A Window With Stuff In It</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <p>There's so much room for activities!</p>
      </div>
    </div>
  );
}

export default Window;
