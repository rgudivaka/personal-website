import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
const App = () => {
  return (
    <div id="App" class="ui container">
      <div class="ui top stackable fixed menu">
        <div class="header item">RG</div>
        <a href="/home" class="item">
          About
        </a>
        <a href="/home" class="item">
          Skills
        </a>
        <a href="/home" class="item">
          Experience
        </a>
        <a href="/home" class="item">
          Projects
        </a>
      </div>
      
      
      <div class="ui container" id="content">
        {/* About Segment */}
        <div class="ui segment">
          <h1 class="ui header">About</h1>
          <div class="ui one column stackable center aligned page grid">
            <div class="column twelve wide">
              <img
                class="ui circular image"
                src="https://pbs.twimg.com/profile_images/893252794207019008/LXSLAiXf.jpg"
                alt="profilePicture"
              />
              <h3 class="ui header">Rishi Gudivaka</h3>
              <p>Northwestern University '21</p>
              <p>McCormick School of Engineering</p>
              <p>B.S. Computer Science</p>
              <p>Minor in Economics</p>
            </div>
          </div>
        </div>

        {/* Experience Segment */}
        <div class = "ui segment">
            
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
