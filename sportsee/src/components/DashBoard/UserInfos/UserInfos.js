import React from "react";
import "../UserInfos/UserInfos.css";

import { getUser } from "../../../service.js";

const userIdInfo12 = getUser(12);
console.log(userIdInfo12);

// const infos12 = userIdInfo12.userInfos;

function UserInfos() {
  return (
    <div className="userInfos">
      <div className="MainSentence">
        {/* <h1>Bonjour {infos12.firstName}</h1> */}
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default UserInfos;
