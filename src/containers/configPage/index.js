import React, { useEffect, useState } from "react";
import MaganerAccountStyled, { ConfigRowStyled } from "./styled";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import SideMenu from "../../components/SideMenu";
import axios from "axios";

import * as _ from "lodash";
import { config } from "../../configs/server";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
function ConfigRow(props) {
  return (
    <ConfigRowStyled>
      <div className="title">{props.title} </div>
      <div className="containerInput">
        <div className="child">
          <InputForm
            Width="100%"
            onChange={(e) => props.onChange1(e.target.value)}
            placeholder={props.placeholder1}
            title={props.title1}
            type="number"
          ></InputForm>
        </div>
        <div className="child">
          <InputForm
            Width="100%"
            onChange={(e) => props.onChange2(e.target.value)}
            placeholder={props.placeholder2}
            title={props.title2}
            type="number"
          ></InputForm>
        </div>
        <div className="child">
          <InputForm
            Width="100%"
            onChange={(e) => props.onChange3(e.target.value)}
            placeholder={props.placeholder3}
            title={props.title3}
            type="number"
          ></InputForm>
        </div>
      </div>
    </ConfigRowStyled>
  );
}

export default function ConfigPage() {
  let history = useHistory();
  const alert = useAlert();
  const [spendData, setSpendData] = useState([]);
  useEffect(() => {
    async function FecthSpend() {
      const result = await axios.get(`${config.server}/spend-account-types`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // temp = result.data;
      // _.forEach(temp, (item) => {
      //   item.limited_amount_per_transaction = formatter.format(
      //     item.limited_amount_per_transaction
      //   );

      //   item.limited_amount_per_day = formatter.format(
      //     item.limited_amount_per_day
      //   );
      // });

      setSpendData(result.data);
    }
    FecthSpend();
  }, []);
  const handleChangeSpend1 = (value) => {
    let temp = spendData;

    temp[0].limited_amount_per_transaction = value;
    setSpendData(temp);
  };
  const handleChangeSpend2 = (value) => {
    let temp = spendData;
    temp[1].limited_amount_per_transaction = value;
    setSpendData(temp);
  };

  const handleChangeSpend3 = (value) => {
    let temp = spendData;
    temp[2].limited_amount_per_transaction = value;
    setSpendData(temp);
  };
  const handleChangeSpend4 = (value) => {
    let temp = spendData;
    temp[0].limited_amount_per_day = value;
    setSpendData(temp);
  };

  const handleChangeSpend5 = (value) => {
    let temp = spendData;
    temp[1].limited_amount_per_day = value;
    setSpendData(temp);
  };

  const handleChangeSpend6 = (value) => {
    let temp = spendData;
    temp[2].limited_amount_per_day = value;
    setSpendData(temp);
  };

  let temp = [];
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });

  const handleUpdate = async () => {
    axios
      .post(
        `${config.server}/update-term`,
        { spendData },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((result) => {
        alert.success("Action success");
        setTimeout(function () {
          history.go(0);
        }, 1500);
      })
      .catch((err) => alert.error("Action error"));
  };
  return (
    <MaganerAccountStyled>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <div className="titleWithButton">
          <p className="SignInTitle"> Configuration</p>
        </div>
        <ConfigRow
          onChange1={handleChangeSpend1}
          onChange2={handleChangeSpend2}
          onChange3={handleChangeSpend3}
          placeholder1={_.get(spendData[0], "limited_amount_per_transaction")}
          placeholder2={_.get(spendData[1], "limited_amount_per_transaction")}
          placeholder3={_.get(spendData[2], "limited_amount_per_transaction")}
          title="Single payment spending limit"
          title1=" Silver"
          title2=" Gold"
          title3=" Platinum"
        ></ConfigRow>
        <ConfigRow
          onChange1={handleChangeSpend4}
          onChange2={handleChangeSpend5}
          onChange3={handleChangeSpend6}
          placeholder1={_.get(spendData[0], "limited_amount_per_day")}
          placeholder2={_.get(spendData[1], "limited_amount_per_day")}
          placeholder3={_.get(spendData[2], "limited_amount_per_day")}
          title="Daily spending limit"
          title1=" Silver"
          title2=" Gold"
          title3=" Platinum"
        ></ConfigRow>

        <Button
          onClick={handleUpdate}
          Width="190px"
          title="Save"
          Top="0px"
          Left="0px"
          BackgroundColor={"#4F6EF6"}
        ></Button>
      </div>
    </MaganerAccountStyled>
  );
}
