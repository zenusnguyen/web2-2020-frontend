import React from "react";
import CardStyled from "./styled";
import SpendCard from "../../assets/spend.png";
import SavingCard from "../../assets/deposit.png";
import Button from "../Button";
import { InforLineStyled } from "./styled";

function InforLine(props) {
  return (
    <InforLineStyled>
      <p className="title">{props.title}</p>
      <p className="detail">{props.detail}</p>
    </InforLineStyled>
  );
}
export default function index(props) {
  // console.log('props: ', props);
  const { UserAccount, UserInfo } = props;
  // console.log('UserAccount, UserInfo: ', UserAccount, UserInfo);
  return (
    <CardStyled>
      <InforLine title="Fullname" detail={UserInfo.full_name}></InforLine>
      <InforLine
        title="Date of birth"
        detail={UserInfo.date_of_birth}
      ></InforLine>
      <InforLine
        title="ID/ Passport number"
        detail={UserInfo.identificationNumber}
      ></InforLine>
      <InforLine
        title=" Date of issue"
        detail={UserInfo.date_of_issue}
      ></InforLine>
      <InforLine
        title="Phone number"
        detail={UserInfo.phone_number}
      ></InforLine>
      <InforLine title="Current address " detail={UserInfo.address}></InforLine>
      <InforLine title="Username" detail={UserAccount.username}></InforLine>
      <InforLine title="Email" detail={UserAccount.email}></InforLine>
    </CardStyled>
  );
}
