import logo from './logo.svg';
import './App.css';
import React from "react";
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <div className="New-York-Backdrop">
        <div className="Dr-Strange-Portal">
          <div className="Jeff-In-Portal">
          
          </div>
        </div>
      </div>
      <div className = "Marvel-Pages-Bar">
      <Link to="/bongos">
        <button>
          <div className = "Marvel-Buton">
            Go to Bongos
          </div>
        </button>
      </Link>
      <Link to="/bucky">
        <button>
          <div className = "Marvel-Buton">
            Go to Bucky
          </div>
        </button>
      </Link>
      <Link to="/characters">
        <button>
          <div className = "Marvel-Buton">
            Go to Characters
          </div>
        </button>
      </Link>
      <Link to="/wishlist">
        <button>
          <div className = "Marvel-Buton">
            Go to Wish List
          </div>
        </button>
      </Link>
      <Link to="/">
        <button>
          <div className = "Marvel-Buton">
            Go Home
          </div>
        </button>
      </Link>
      </div>
      
    </div>
    
  );
}

export default App;
