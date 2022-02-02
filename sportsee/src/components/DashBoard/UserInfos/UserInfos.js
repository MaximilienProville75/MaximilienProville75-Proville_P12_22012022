import React, { useState } from "react";
import "../UserInfos/UserInfos.css";

function UserInfos(props) {
  return (
    <div className="userInfos">
      <div className="MainSentence">
        <h1>Bonjour {props.user.firstName}</h1>
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default UserInfos;
