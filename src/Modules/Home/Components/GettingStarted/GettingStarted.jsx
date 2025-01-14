import React from "react";
import { Link } from "react-router-dom";

import "./GettingStarted.css";

const GettingStarted = () => {
  return (
    <div id="getting-started" className="GettingStarted-main">
      <h1 className="GettingStarted-title">Getting Started</h1>
      <div className="GettingStarted-steps-container">
        <div className="GettingStarted-steps-div">
          <h1>Download/Setup Assetto Corsa</h1>
          <div>
            <h2>Purchasing Assetto Corsa</h2>
            <p>
              First, our servers perform a "Steam Verification" process. This
              ensures that all members own legitimate copies of the game.
              <br />
              At TPM, we strictly prohibit the use of illegally obtained copies.
              Users found in violation of this policy will be banned.
              <br />
              <br />
              Assetto Corsa and its DLCs can be purchased and downloaded through
              Steam.
              <a
                href="https://store.steampowered.com/app/244210/Assetto_Corsa/"
                target="_blank"
                rel="noopener noreferrer"
                className="steam-button"
              >
                <img
                  src="https://store.steampowered.com/favicon.ico"
                  alt="Steam Icon"
                  className="steam-icon"
                />
                <span>Get Assetto Corsa on Steam</span>
              </a>
            </p>
          </div>
          <div>
            <h2>Downloading Assetto Corsa</h2>
            <p>
              Once purchased, install Assetto Corsa and its DLCs just like any
              other game.
              <br />
              Alternatively, you can click the button below:
              <a
                href="steam://install/244210"
                target="_blank"
                rel="noopener noreferrer"
                className="steam-button"
              >
                <img
                  src="https://store.steampowered.com/favicon.ico"
                  alt="Steam Icon"
                  className="steam-icon"
                />
                <span className="steam-button-text">
                  Install Assetto Corsa from Steam
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="GettingStarted-steps-div">
          <h1>Content Manager & CSP, Sol</h1>
          <div>
            <h2>Content Manager</h2>
            <p>
              Content Manager (CM) is a vital tool for playing Assetto Corsa in
              2024.
              <br />
              Keys are available to unlock the full edition of CM. However, this
              is not required.
              <br />
              <a
                href="https://acstuff.ru/app/"
                target="_blank"
                rel="noopener noreferrer"
                className="steam-button"
              >
                Content Manager Site
              </a>
              <br />
              <a
                href="https://acstuff.ru/app/latest.zip"
                target="_blank"
                rel="noopener noreferrer"
                className="steam-button"
              >
                Direct Download
              </a>
              <br />
            </p>
          </div>
          <div>
            <h2>Custom Shaders Patch (CSP)</h2>
            <p>
              CSP is required to play on our servers and can be downloaded from
              CM directly.
              <br />
              Head over to Settings > Custom Shaders Patch > Download.
              <br />A "Preview" edition is available on the creator's Patreon
              for $1/month. The Preview edition is the ONLY way to get RAIN and
              other exclusive features not yet released to the public.
              <a
                href="https://www.patreon.com/x4fab"
                target="_blank"
                rel="noopener noreferrer"
                className="steam-button"
              >
                Purchase CSP Preview
              </a>
            </p>
          </div>
          <div>
            <h2>Sol</h2>
            <p>
              Sol is the backbone for CSP-based weather such as the day-night
              cycle
              <br />
              <a
                href="https://www.overtake.gg/downloads/sol.24914/"
                target="_blank"
                rel="noopener noreferrer"
                className="steam-button"
              >
                Download SOL
              </a>
            </p>
          </div>
          <h2>Non-required Addons</h2>
          <p>
            These addons/plugins for the game are NOT required for the servers;
            however, they may enhance your experience.
          </p>
          <div>
            <h2>Pure</h2>
            <p>
              Pure is a PAID and unnecessary addon to help bring the graphics of
              AC to the pinnacle of gaming.
              <br />
              Pure includes the following features:
              <br />
              - New Skyboxes to make more realistic weather and scenery
              <br />
              - New 3D rendered clouds that are adaptive to the weather and time
              <br />- An added boost on the CSP lighting setup to create darker
              areas outside of headlights and a "fake" Ray Tracing System
              <br />
              <a
                href="https://www.patreon.com/peterboese"
                target="_blank"
                rel="noopener noreferrer"
                className="steam-button"
              >
                Download Pure
              </a>
            </p>
          </div>
        </div>
        <div className="GettingStarted-steps-div">
          <h1>Joining Our Servers</h1>
          <p>
            Finally, you can join our servers by selecting a server from below
            OR the servers tab.
          </p>
          <ul>
            <li>
              > Once CM has opened one of the servers click "Download Missing
              Content".
            </li>
            <li>
              > A Green Arrow will appear in the top left of the application.
            </li>
            <li>> Once Ready, press Install all.</li>
            <li>> Select a car and Enjoy!</li>
          </ul>
          <div className="server-master">
            <h2>Our Servers</h2>
            <div className="server-Container">
              <button>
                <span className="status-green"></span> SRP | Heavy Traffic |
                0/24
              </button>
            </div>
            <div className="server-Container">
              <button>
                <span className="status-red"></span> SRP | Mediocre Traffic |
                0/24
              </button>
            </div>
            <div className="server-Container">
              <button>
                <span className="status-green"></span> SRP | Light Traffic |
                0/24
              </button>
            </div>
            <div className="server-Container">
              <Link to="/servers">Our Other Servers </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
