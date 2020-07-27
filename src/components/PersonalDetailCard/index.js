import React from "react";
import CardStyled from "./styled";

import { InforLineStyled } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
function InforLine(props) {
  return (
    <InforLineStyled>
      <p className="title">{props.title}</p>
      <p className="detail">{props.detail}</p>
    </InforLineStyled>
  );
}
export default function PersonalDetailCard(props) {
  console.log('props: ', props);
  const { accountInfo } = props;
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `http://localhost:1337/customer-infors/?id=${props.accountInfo.user_info}`
      );
      setUserInfo(result.data[0]);
    }
    Fecth();
  }, [props.accountInfo.user_info]);

  let display = "none";

  return (
    <CardStyled>
      <InforLine title="Fullname" detail={userInfo.full_name}></InforLine>
      <InforLine
        title="Date of birth"
        detail={userInfo.date_of_birth}
      ></InforLine>
      <InforLine
        title="ID/ Passport number"
        detail={userInfo.identificationNumber}
      ></InforLine>
      <InforLine
        title=" Date of issue"
        detail={userInfo.date_of_issue}
      ></InforLine>
      <InforLine
        title="Phone number"
        detail={userInfo.phone_number}
      ></InforLine>
      <InforLine title="Current address " detail={userInfo.address}></InforLine>
      <InforLine title="Username" detail={accountInfo.username}></InforLine>
      <InforLine title="Email" detail={accountInfo.email}></InforLine>
      <div className="groupImage" style={{ display: display }}>
        <img
          className="identificationImage"
          src={
            "https://images.hdqwalls.com/download/small-memory-8k-2a-2048x2048.jpg"
          }
        ></img>
        <img
          className="identificationImage"
          src={
            "https://images.hdqwalls.com/download/small-memory-8k-2a-2048x2048.jpg"
          }
        ></img>
      </div>
    </CardStyled>
  );
}
