import React from "react";
import ss from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' />
      </div>
      <div className={ss.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
