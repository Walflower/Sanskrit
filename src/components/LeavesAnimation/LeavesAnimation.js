import React from "react";
import "./LeavesAnimation.scss";
import OneLeaf from "../../assets/images/single-leaf.png";

function LeavesAnimation() {
  return (
    <div className="leaves">
      <img src={OneLeaf} alt="Leaf" className="leaves__one" />
      <img src={OneLeaf} alt="Leaf" className="leaves__two" />
    </div>
  );
}

export default LeavesAnimation;
