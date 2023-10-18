import React from "react";
// icons
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const UserIcons = () => {
  return (
    <div className="flex gap-4">
      <FaRegUser size={25} />
      <div className="icon">
        <FaRegHeart size={25} />
      </div>
      <div className="icon">
        <BsCart3 size={25} />
      </div>
    </div>
  );
};

export default UserIcons;
