import React, { useState } from "react";
import "../UserInfos/UserInfos.css";
import propTypes from "prop-types";

function UserInfos(props) {
  return (
    <div className="userInfos">
      <div className="MainSentence">
        <h1>Bonjour {props.infos.firstName}</h1>
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

UserInfos.propTypes = {
  infos: propTypes.object,
  firstName: propTypes.string,
};

export default UserInfos;
