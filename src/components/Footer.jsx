import React from "react";
import "../App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container-footer">
          <div className="sec aboutus">
            <h2>About us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              incidunt? Voluptatem tenetur placeat tempore numquam vitae aliquid
              nemo neque dolorem amet alias, consectetur magni consequatur
              explicabo impedit ad veniam rerum?
            </p>
            <ul className="sci">
              <li>
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <YouTubeIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy Policu</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Games</h2>
            <ul>
              <li>
                <a href="#">Terror</a>
              </li>
              <li>
                <a href="#">Adventure</a>
              </li>
              <li>
                <a href="#">Arcade</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">Simulation</a>
              </li>
              <li>
                <a href="#">Action</a>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Us</h2>
            <ul className="info">
              <li>
                <span>
                  <PhoneIphoneIcon />
                </span>
                <p>
                  <a href="tel:+12345678900">+1 234 567 8900</a>
                </p>
              </li>
              <li>
                <span>
                  <MailOutlineIcon />
                </span>
                <p>
                  <a href="mailto:+12345678900">hola@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyrightText">
          <p>Copyright © 2022 MARKET GAMES. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
