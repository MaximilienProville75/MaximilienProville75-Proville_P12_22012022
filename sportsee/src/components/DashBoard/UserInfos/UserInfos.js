import React from "react";
import "../UserInfos/UserInfos.css";

import { getUserById } from "../../../models";

const userIdInfo12 = getUserById(12);

const infos12 = userIdInfo12.userInfos;
console.log(infos12.firstName);

function UserInfos() {
  return (
    <div className="userInfos">
      <div className="MainSentence">
        <h1>Bonjour {infos12.firstName}</h1>
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default UserInfos;
