import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTrash, faComment } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import "../components/header.css";
import home from "../public/images/iconsMenu/5.png";
import contact from "../public/images/iconsMenu/2.png";
import art from "../public/images/iconsMenu/3.png";
import insta from "../public/images/iconsMenu/4.png";
import team from "../public/images/iconsMenu/1.png";

function Header() {
  const handleToggleClick = () => {
    const menuToggle = document.querySelector(".menu__toggle");
    menuToggle.classList.toggle("clicked");
  };

  return (
    <div className="headerDiv">
      <section className="menu menu--circle ">
        <input type="checkbox" id="menu__active" />
        <label htmlFor="menu__active" className="menu__active">
          <div className="menu__toggle" onClick={handleToggleClick}>
            <svg
              className="svg-icon"
              width="auto"
              height="auto"
              viewBox="0 0 212 322"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 3">
                <path
                  className="svg-icon-path"
                  id="Vector 1"
                  d="M112.36 50.8487C115.936 85.1232 130.708 158.77 144.012 151.033C158.497 149.336 187.468 149.804 198.197 168.943C211.609 192.868 185.393 196.107 159.981 201.873C150.507 204.022 148.175 221.394 131.137 223.5C119 225 120 221 101.584 215C83.1679 209 55 238 65 250.5M65 250.5C67.5751 252.536 76 263.5 86.5 265.5C107.345 269.471 108.5 270 112.36 275.142C116.219 280.283 123.829 291.393 144.012 286.605C167.081 281.133 179.957 298.745 184.249 301.291C187.682 303.327 198.913 306.89 204.099 308.417C187.468 307.399 174.592 310.962 167.081 312.489C156.888 314.016 156.051 315.358 144.012 318.598C121.815 324.571 99.509 310.135 91.4368 300.273C81.3711 287.974 66.2518 259.323 65 250.5ZM101.584 47.7095C80.8398 58.3991 43.0475 68.5984 10 40.5M60 80C57 76.5 53.1373 62.7451 57 58.6561M77 76.5C74.8541 76.5 70.4065 61.2598 74.2692 57.1707M24 70.5C24 70.5 21.5 55.7087 27.5 51.8567M42.4479 76.5C40.3019 76.5 38.5852 59.8882 42.4479 55.7992M93 70.5C90.8541 70.5 84.6373 56.9903 88.5 52.9013M10.964 17.7618C23.6608 26.585 46.694 34.4579 65.149 23.8702C88.2179 10.6354 112.36 64.5924 131.137 36.5959C149.914 8.59931 167.081 23.8702 179.957 23.8702C203.764 23.8702 204.993 17.7618 210 11.1445V3C203.741 5.71482 184.141 14.7077 175.128 14.7077C163.862 14.7077 150.445 8.09462 134.892 20.816C119.334 33.5417 117.188 42.1952 112.36 36.5959C107.531 30.9966 94.6557 11.6535 74.2692 14.7077C53.8828 17.7618 43.1531 32.5236 14.7194 17.7618C-8.02759 5.95236 5.59912 12.8412 10.964 17.7618Z"
                  stroke="black"
                  stroke-width="3"
                />
                <path
                  className="svg-icon-path"
                  id="Vector 3"
                  d="M199 308C135.022 307.942 94.8834 292.696 71 259"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  className="svg-icon-path"
                  id="Vector 5"
                  d="M204.5 308C185.145 297.162 178 251.5 154.355 256.838C112.859 266.205 120.855 252.338 88.8552 232.338C70.7184 221.002 25.3552 213.838 73.3552 261.838"
                  stroke="black"
                  stroke-width="2"
                />
              </g>
            </svg>
            <div className="icon">
              <div className="hamburger"></div>
            </div>
          </div>
          <input type="radio" name="arrow--up" id="degree--up-0" />
          <input type="radio" name="arrow--up" id="degree--up-1" />
          <input type="radio" name="arrow--up" id="degree--up-2" />
          <div className="menu__listings">
            <ul className="circle">
              <li>
                <div className="placeholder">
                  <div className="upside">
                    {/* <FontAwesomeIcon icon= />  */}
                    <Link to="/art" className="button">
                      <img src={art} className="customIconCss" alt="Art Icon" />
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/home" className="button">
                      <img
                        src={home}
                        className="customIconCss"
                        alt="Team Icon"
                      />
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="button"></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="button">
                      {`way${"!"}`}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="button">
                      on the
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a href="#" className="button">
                     rest
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a className="button">pro</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/team" className="button">
                      <img src={team} className="customIconCss" />
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <a
                      href="https://www.instagram.com/passtillios/"
                      className="button"
                    >
                      {/**  <FontAwesomeIcon icon={faTrash} /> */}
                      <img src={insta} className="customIconCss" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="placeholder">
                  <div className="upside">
                    <Link to="/contact" className="button">
                      <img src={contact} className="customIconCss" />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="menu__arrow menu__arrow--top">
            <ul>
              <li>
                {Array.from({ length: 10 }, (_, index) => (
                  <label key={index} htmlFor={`degree--up-${index}`}>
                    <div className="arrow"></div>
                  </label>
                ))}
              </li>
            </ul>
          </div>
        </label>
      </section>
    </div>
  );
}

export default Header;
