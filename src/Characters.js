import logo from './logo.svg';
import './App.css';
import React from "react";
import { Link } from 'react-router-dom';

//pages


function Characters() {
  return (
    <div>
      <div className="New-York-Backdrop">
        <div className="Dr-Strange-Portal">
          <div className="Jeff-In-Portal">
          
          </div>
        </div>
      </div>
      <Link to="/bongos">
        <button>This is the Bongos page</button>
      </Link>
    </div>
    
  );
}

export default Characters;
