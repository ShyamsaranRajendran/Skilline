import React from 'react'
import logo from "../assets/logo.svg";
import "./css/Header.css";
function Header() {
  return <div className="Header">
        <img src={logo} alt="" className="logo" />
        <nav>
            <ul>
                <li><button className="head-btn">  Home </button>  </li>
                <li><button className="head-btn">Careers </button>  </li>
                <li><button className="head-btn">Blog </button>  </li>
                <li><button className="head-btn">About Us </button>  </li>
                <li><button className="head-auth-btn">login </button>  </li>
                <li><button className="head-auth-btn">Sign Up </button>  </li>
            </ul>
        </nav>
  </div>;
}

export default Header