import React, {  useEffect, useState } from "react";
import MaganerAccountStyled from "./styled";
import { BrowserRouter as  Link } from "react-router-dom";
import Button from "../../components/Button";
import AddIcon from "../../assets/add-circle.png";
import SideMenu from "../../components/SideMenu";
import Card from "../../components/Card";
import axios from "axios";
import DetailCard from "../AccountDetailPage";
import { config } from "../../configs/server";
function ShowDetail(cardInfo, HandlerClick) {
  return <DetailCard cardInfo={cardInfo} onClick={HandlerClick}></DetailCard>;
}

export default function MaganeAccount() {
  const [data, setData] = useState([]);
  const [CardID, SetCardID] = useState("");
  const [isDetail, setIsDetail] = useState(false);
  const [styled, setStyled] = useState("");
  const [styled2, setStyled2] = useState("none");
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `${config.server}/spend-accounts-by-owneraccount?id=${
          JSON.parse(localStorage.getItem("userAccount")).id
        }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setData(result.data);
    }
    Fecth();
  }, []);

  const HandlerClick = (cardInfo) => {
    SetCardID(cardInfo);
    if (isDetail) {
      setStyled("");
      setStyled2("none");
      setIsDetail(!isDetail);
    } else {
      setIsDetail(!isDetail);
      setStyled("none");
      setStyled2("");
    }
  };

  const RenderCard = () => {
    return data.map((items) => (
      <Card
        onClick={() => {
          HandlerClick(items);
        }}
        unit={items.currency_unit}
        key={items.key}
        Number={items.card_number}
        Balance={items.balance || 0}
        Status={items.status}
        Created={items.created_date}
        Spend_type={items.spend_type}
        Card_type={items.card_type}
      ></Card>
    ));
  };

  return (
    <MaganerAccountStyled>
      <SideMenu></SideMenu>
      <div className="containerForm" style={{ display: styled }}>
        <div className="titleWithButton">
          <p className="pageTitle"> Manage accounts</p>
          <Link to="/create">
            <Button
              key="1"
              Top="0px"
              title="Add account"
              Width="187px"
              Src={AddIcon}
              Display="flex"
              BackgroundColor="#4F6EF6"
            ></Button>
          </Link>
        </div>
        <div className="listCard">
          <RenderCard></RenderCard>
        </div>
      </div>
      <div className="detailCard" style={{ display: styled2 }}>
        {ShowDetail(CardID, HandlerClick)}
      </div>
    </MaganerAccountStyled>
  );
}
