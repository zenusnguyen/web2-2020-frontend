import React, {  useEffect, useState } from "react";
import MaganerAccountStyled from "./styled";
import Search from "../../assets/search.svg";
import SideMenu from "../../components/SideMenu";
import CustomerCard from "../../components/CustomerCard";
import axios from "axios";
import CustomerDetailPage from "../CustomerDetailPage";
import { config } from "../../configs/server";
import * as _ from "lodash";
export default function MaganeAccount() {
  const [customer, setCustomer] = useState([]);
  const [customerRender, setCustomerRender] = useState([]);
  const [isDetail, setIsDetail] = useState(false);
  const [styled, setStyled] = useState("");
  const [styled2, setStyled2] = useState("none");
  const [cardInfo, setcardInfo] = useState("");
  const [state, setState] = useState("detail");
  const [spendAccount, setSpendAccount] = useState([]);
  const [searchValeu, setSearchValue] = useState("");
  useEffect(() => {
    async function FecthUser() {
      const result = await axios.get(
        `${config.server}/users-permissions/users-active`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCustomer(result.data);
      setCustomerRender(result.data);
    }
    FecthUser();
    async function FecthSpend() {
      const result = await axios.get(`${config.server}/spend-accounts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setSpendAccount(result.data);
    }
    FecthSpend();
  }, []);

  const HandlerClick = (items) => {
    setcardInfo(items);
    setState("card");
  };

  const filterUserName = (text) => {
    let data = [];

    _.forEach(customer, (item) => {
      if (item.username == text) {
        data.push(item);
      }
    });
    return data;
  };

  const filterEmail = (text) => {
    let data = [];

    _.forEach(customer, (item) => {
      if (item.email == text) {
        data.push(item);
      }
    });
    return data;
  };

  const filterIDCard = (text) => {
    let data = [];

    _.forEach(spendAccount, (item) => {
      if (item.card_number == text) {
        _.forEach(customer, (item2) => {
          if (item2.id == item.account_id) {
            data.push(item2);
          }
        });
      }
    });
    return data;
  };
  const handlerSearch = (e) => {
    let result = [];
    if (filterEmail(e).length !== 0) {
      result = filterEmail(e);
    } else if (filterUserName(e).length !== 0) {
      result = filterUserName(e);
    } else if (filterIDCard(e).length !== 0) {
      result = filterIDCard(e);
    } else if (e.length == 0) {
      result = customer;
    }
    setCustomerRender(result);
  };

  const RenderCard = () => {
    return customerRender.map((items, index) => (
      <CustomerCard
        onClick={() => {
          HandlerClick(items);
        }}
        key={index}
        email={items.email}
        username={items.username}
        Status={items.status}
        Created={items.created_date}
      ></CustomerCard>
    ));
  };
  if (state === "detail") {
    return (
      <MaganerAccountStyled>
        <SideMenu></SideMenu>
        <div className="containerForm" style={{ display: styled }}>
          <div className="titleWithButton">
            <p className="SignInTitle"> All customers </p>
            <div className="searchBar">
              <img src={Search}></img>
              <input
                placeholder="Search"
                type="text"
                onChange={(e) => {
                  handlerSearch(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="listCard">
            <RenderCard></RenderCard>
          </div>
        </div>
      </MaganerAccountStyled>
    );
  } else {
    return (
      <CustomerDetailPage
        data={cardInfo}
        backImg="../../assets/back.svg"
        backTitle="All customers"
        onClick={() => {
          setState("detail");
        }}
      ></CustomerDetailPage>
    );
  }
}
