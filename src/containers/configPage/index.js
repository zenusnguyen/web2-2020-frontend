import React, { useEffect, useState } from "react";
import MaganerAccountStyled, { ConfigRowStyled } from "./styled";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import SideMenu from "../../components/SideMenu";
import axios from "axios";
import Select from "react-select";
import * as _ from "lodash";
function ConfigRow(props) {
  return (
    <ConfigRowStyled>
      <div className="title">{props.title} </div>
      <div className="containerInput">
        <InputForm
          onChange={props.onChange1}
          placeholder={props.placeholder1}
          title={props.title1}
        ></InputForm>
        <InputForm
          onChange={props.onChange2}
          placeholder={props.placeholder2}
          title={props.title2}
        ></InputForm>
        <InputForm
          onChange={props.onChange3}
          placeholder={props.placeholder3}
          title={props.title3}
        ></InputForm>
      </div>
    </ConfigRowStyled>
  );
}

export default function ConfigPage() {
  const [spendData, setSpendData] = useState([]);
  const [savingData, setSavingData] = useState(0);
  const [listSaving, setListSaving] = useState([]);
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
    temp[0].limited_amount_per_date = value;
    setSpendData(temp);
  };

  const handleChangeSpend5 = (value) => {
    let temp = spendData;
    temp[1].limited_amount_per_date = value;
    setSpendData(temp);
  };

  const handleChangeSpend6 = (value) => {
    let temp = spendData;
    temp[2].limited_amount_per_date = value;
    setSpendData(temp);
  };
  const handlerChangSaving = (value) => {
    let temp = listSaving;

    console.log("temp: ", temp);

    temp[savingData - 1].newRate = value;
    console.log(" temp[index - 1]: ", temp[savingData - 1]);
  };
  let temp = [];
  useEffect(() => {
    async function FecthSpend() {
      const result = await axios.get(
        "http://localhost:1337/spend-account-types"
      );
      setSpendData(result.data);
    }
    FecthSpend();
    async function FecthSaving() {
      const result = await axios.get("http://localhost:1337/interest-rates");
      _.forEach(result.data, (item) => {
        temp.push({
          label: ` ${item.period} month - Interest rate ${item.interest_rate} %`,
          value: item.id,
        });
      });
      setListSaving(temp);
    }

    FecthSaving();
  }, []);
  console.log("spendData: ", spendData);
  console.log("savingData: ", savingData);
  return (
    <MaganerAccountStyled>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <div className="titleWithButton">
          <p className="SignInTitle"> Configuration</p>
        </div>
        <ConfigRow
          onChange1={handleChangeSpend1}
          onChange2={handleChangeSpend3}
          onChange3={handleChangeSpend5}
          placeholder1={_.get(spendData[0], "limited_amount_per_transaction")}
          placeholder2={_.get(spendData[1], "limited_amount_per_transaction")}
          placeholder3={_.get(spendData[2], "limited_amount_per_transaction")}
          title="Single payment spending limit"
          title1=" Silver"
          title2=" Gold"
          title3=" Platinum"
        ></ConfigRow>
        <ConfigRow
          onChange1={handleChangeSpend2}
          onChange2={handleChangeSpend4}
          onChange3={handleChangeSpend6}
          placeholder1={_.get(spendData[0], "limited_amount_per_day")}
          placeholder2={_.get(spendData[1], "limited_amount_per_day")}
          placeholder3={_.get(spendData[2], "limited_amount_per_day")}
          title="Daily spending limit"
          title1=" Silver"
          title2=" Gold"
          title3=" Platinum"
        ></ConfigRow>
        <p style={{ fontSize: "24px", fontWeight: "600" }}>
          Savings annual interest rates
        </p>
        <div className="dualConfig">
          <div className="selectTerm">
            <p>Term</p>
            <Select
              options={listSaving}
              onChange={(e) => setSavingData(e.value)}
              defaultValue={{
                label: " 1 month - Interest rate 4.6%",
                value: "1",
              }}
            />
          </div>
          <InputForm
            onChange={(e) => handlerChangSaving(e.target.value)}
            title="Rate (%)"
          ></InputForm>
        </div>
        <Button
          Left="0px"
          title="Save"
          Width="190px"
          BackgroundColor="blue"
        ></Button>
      </div>
    </MaganerAccountStyled>
  );
}
