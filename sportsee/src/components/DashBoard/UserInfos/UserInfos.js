import React, { useState } from "react";
import "../UserInfos/UserInfos.css";

import { Model } from "../../../model";

function UserInfos() {
  const [user, setUser] = useState(" ");
  // const [keyData, setKeydata] = React.useState(" ");

  React.useEffect(() => {
    Model.getUser(18).then((res) => {
      setUser(res.userInfos.firstName);
    });
  }, []);

  return (
    <div className="userInfos">
      <div className="MainSentence">
        <h1>Bonjour {user}</h1>
      </div>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default UserInfos;
