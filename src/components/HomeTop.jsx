import React from "react";
import "./HomeTop.scss";

const HomeTop = () => {
  return (
    <div className="Content">
        <div className="first">
        <div className="firstContent">
          <div>
            <h1>
              ENTER INTO THE <span className="orange">90S</span> VERSE
            </h1>
          </div>
          <div className="firstcontent__content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              expedita fugiat, eveniet minima maxime deserunt.
            </p>
          </div>
        </div>
        <div className="firstimage-container">
          <div className="firstImg">
            <img className="img1" src="./camera.png" alt="img1" />
          </div>
        </div>
      </div><br /><br />
      <hr />
      <div className="line">
      <div className="circle">
        <img src="./xtasy.png" alt="" className="xtasy" />
      </div>
      </div>
      <hr /><br /><br />

      {/* 2nd slide */}

      <div className="second">
        <div className="secondImg">
          <img className="img2" src="./radio.png" alt="img2" />
        </div>
        <div className="secondContent">
          <h1>KNOW THE MIRACLE</h1>
          <div className="firstcontent__content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              rem odio quos accusantium deserunt fugiat alias nam ipsam ea
              corporis eveniet cumque, consectetur nobis ut in. Repudiandae
              culpa perferendis veritatis consequuntur saepe fuga soluta
              voluptate delectus dolorum. Quibusdam, perferendis neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
