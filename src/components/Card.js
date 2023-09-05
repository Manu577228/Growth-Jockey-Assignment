import React from "react";
import "./card.css";
import { FaCopy } from "react-icons/fa";

const Card = () => {
  return (
    <div className="card">
      <p className="heading">
        PS3&SVBIA{" "}
        <span className="copy-icon">
          <FaCopy />
        </span>
      </p>
      <div className="character">
        <p>
          Character Length <span className="number">4</span>
        </p>
        <progress className="file-progressbar" value="40" max="100">
          {" "}
          4%{" "}
        </progress>
      </div>
      <div class="loader-line"></div>

      <div className="check-boxes">
        <div className="checkbox-1">
          <input type="checkbox" />
          <label>Include Uppercase Letters</label>
        </div>
        <div className="checkbox-2">
          <input type="checkbox" />
          <label>Include Lowercase Letters</label>
        </div>
        <div className="checkbox-3">
          <input type="checkbox" />
          <label>Include Numbers</label>
        </div>
        <div className="checkbox-4">
          <input type="checkbox" />
          <label>Include Symbols</label>
        </div>
      </div>
      <div className="strength">
        <p>
          STRENGTH<span className="poor">poor</span> 
        </p>
        <div className="file-progressbar-2">
          <progress className="prog" value="100" max="100"></progress>
          <progress className="prog" value="100" max="100"></progress>
          <progress value="0" max="100"></progress>
          <progress value="0" max="100"></progress>
          <progress value="0" max="100"></progress>
        </div>
      </div>
      <button className="btn">Generate</button>
    </div>
  );
};

export default Card;
