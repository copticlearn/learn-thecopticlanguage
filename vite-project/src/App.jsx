import React, { useState } from 'react';
import OneOne from './lessons/1-1';

function App() {
  const [showOneOne, setShowOneOne] = useState(false);

  return (
    <body>
      <header>
        <button id="logo">
          <a href="https://beta.learn.thecopticlanguage.com">
            <h1>
              T<span id="hide">he</span>C<span id="hide">optic</span>L
              <span id="hide">anguage</span>
            </h1>
          </a>
        </button>
        <a href="./login/login.html">
          <button id="account">Sign in</button>
        </a>
        <button id="modes"></button>
      </header>
      {showOneOne ? <OneOne /> : 
      <div id="main">
        <div id="inner">
          <div className="unit">
            <div className="uHead">Unit 1: The Beginning</div>
            <div className="moduleSection">
              <div className="module" id="1-1" onClick={() => setShowOneOne(true)}>
                <div className="progressBar" id="t">
                  <svg
                    viewBox="0 0 500 500"
                    className="progressSVG"
                  >
                    <ellipse
                      className="progressC"
                      cx="250"
                      cy="250"
                      rx="172.798"
                      ry="172.798"
                    ></ellipse>
                    <text
                      className="pText"
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      10%
                    </text>
                  </svg>
                </div>
                <div className="mHead">Introduction</div>
              </div>
              <div className="module" id="1-2">
                <div className="progressBar">
                  <svg
                    viewBox="0 0 500 500"
                    className="progressSVG"
                  >
                    <ellipse
                      className="progressC"
                      cx="250"
                      cy="250"
                      rx="172.798"
                      ry="172.798"
                    ></ellipse>
                    <text
                      className="pText"
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      10%
                    </text>
                  </svg>
                </div>
                <div className="mHead">Alphabet</div>
              </div>
            </div>
          </div>
          <div className="unit">
            <div className="uHead">Unit 2: Nouns</div>
            <div className="moduleSection">
              <div className="module" id="2-1">
                <div className="progressBar">
                  <svg
                    viewBox="0 0 500 500"
                    className="progressSVG"
                  >
                    <ellipse
                      className="progressC"
                      cx="250"
                      cy="250"
                      rx="172.798"
                      ry="172.798"
                    ></ellipse>
                    <text
                      className="pText"
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      10%
                    </text>
                  </svg>
                </div>
                <div className="mHead">Nouns and Gender</div>
              </div>
              <div className="module" id="2-2">
                <div className="progressBar">
                  <svg
                    viewBox="0 0 500 500"
                    className="progressSVG"
                  >
                    <ellipse
                      className="progressC"
                      cx="250"
                      cy="250"
                      rx="172.798"
                      ry="172.798"
                    ></ellipse>
                    <text
                      className="pText"
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                    >
                      10%
                    </text>
                  </svg>
                </div>
                <div className="mHead">Articles</div>
              </div>
            </div>
          </div>
        </div>
      </div> }
      {/* <script src="./common.js"></script>
      <script src="script.js"></script> */}
    </body>
  );
}

export default App;
