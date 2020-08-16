import React, { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import TransferStyled from "./styled";
import axios from "axios";
import * as _ from "lodash";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { config } from "../../configs/server";
export default function TransferPage() {
  const [spendAccounts, setSpendAccount] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(0);
  const [beneficiary, setBeneficiary] = useState(0);
  const [amount, setAmount] = useState(0);
  const [remark, setRemark] = useState("");
  const [spendArrays, setSpendArrays] = useState([]);
  const [currentAccount, setCurrentAccount] = useState("");
  let history = useHistory();
  const alert = useAlert();
  const [otp, setOtp] = useState("");
  const [otp2, setOtp2] = useState("");
  let transferType = "intra";
  function getAvailableBalance(cardNumber) {
    setCurrentAccount(cardNumber);
    _.forEach(spendArrays, (item) => {
      if (item.card_number == cardNumber) {
        setAvailableBalance(item.balance);
      }
    });
  }
  async function getOTP() {
    const result = await axios
      .post(
        `${config.server}/getotp`,
        {
          email: JSON.parse(localStorage.getItem("userAccount")).email,
          card_number: currentAccount,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )

      .then((response) => {
        setOtp2(response.data);
        alert.success("please check your mail to get OTP code");
      })
      .catch((error) => alert.error("Action error please check again!"));
  }

  const submit = (fullname, amount) => {
    confirmAlert({
      title: "Confirm to submit",
      message: `Are you sure to do transfer to ${fullname}. Amount: ${amount} .`,
      buttons: [
        {
          label: "Yes",
          onClick: () => handleTransfer(),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handlerAmount = (value) => {
    if (value > availableBalance) {
      alert.error("your amount is lager than current balance");
      setAmount(0);
    }
    setAmount(value);
  };

  async function handlerConfirm() {
    if (
      beneficiary.length < 5 ||
      remark.length < 1 ||
      amount <= 0 ||
      otp.length < 5
    ) {
      alert.error("please check your input");
    } else {
      await axios
        .get(`${config.server}/spend-accounts-findbycardid?id=${beneficiary}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          submit(response.data[1].full_name, amount);
        })
        .catch((error) => alert.error(" beneficiary account invalid"));
    }
  }

  async function handleTransfer() {
    await axios
      .post(
        `${config.server}/spend-accounts-transfer-intra`,
        {
          currentAccount: currentAccount,
          remark: remark,
          amount: amount,
          beneficiaryAccount: beneficiary,
          otp: otp,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        if (response.status === 200) {
          alert.success("Transfer Successful");
        }
      })
      .catch((error) => {
        alert.error("Transfer falied,Limited amount");
      });
  }
  let spendAccountsArray = [];
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
      setSpendArrays(result.data);

      _.forEach(result.data, (item) => {
        if (item.status === "active" && item.card_type === "spend") {
          spendAccountsArray.push({
            label: `${item.card_number}`,
            value: `${item.card_number}`,
          });
        }
      });
      setSpendAccount(spendAccountsArray);
    }
    Fecth();
  }, []);

  const techCompanies = [
    { label: "Bank 1", value: 1 },
    { label: "Bank 2", value: 2 },
    { label: "Bank 3", value: 3 },
    { label: "Bank 4", value: 4 },
    { label: "Bank 5", value: 5 },
    { label: "Bank 6", value: 6 },
  ];

  const [isExtra, SetIsExtra] = useState(false);
  let display = "";

  if (isExtra == false) {
    transferType = "extra";
    display = "none";
  } else {
    transferType = "intra";
    display = "";
  }

  return (
    <TransferStyled>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <h3 className="title">Transfer funds</h3>
        <br />
        <div>
          <p className="titleType" style={{ marginBottom: "4px" }}>
            Transfer type{" "}
          </p>
          <input
            onChange={(e) => SetIsExtra(!isExtra)}
            defaultChecked
            type="radio"
            name="transferstyle"
            defaultValue="intra"
          />{" "}
          Intra-bank transfer (Same bank)
          <br />
          <input
            onChange={(e) => SetIsExtra(!isExtra)}
            type="radio"
            name="transferstyle"
            defaultValue="inter"
          />{" "}
          Inter-bank transfer (Across banks)
        </div>
        <br />
        <div className="extraBanking">
          <p>Select a Spend account</p>
          <Select
            options={spendAccounts}
            onChange={(e) => getAvailableBalance(e.value)}
            placeholder={"Select"}
          />
        </div>
        <div>
          <InputForm
            value={availableBalance}
            type="number"
            title="Available Balance"
            name={"balance"}
            readonly={"readonly"}
          ></InputForm>
          <div className="extraBanking" style={{ display: display }}>
            <p>Beneficiary bank</p>
            <Select options={techCompanies} placeholder={"Select"} />
          </div>
          <InputForm
            onChange={(e) => setBeneficiary(e.target.value)}
            type="text"
            title="Beneficiary account"
            name={"bankaccount"}
            placeholder={"Enter account number"}
          ></InputForm>

          <InputForm
            onChange={(e) => handlerAmount(e.target.value)}
            defaultValue={0}
            type="number"
            title="Amount"
            name={"amount"}
            placeholder={"Enter amount"}
          ></InputForm>
          <TextArea
            onChange={(e) => setRemark(e.target.value)}
            type="text"
            title="Remark "
            name={"remark"}
            Bot="50px"
          ></TextArea>
          <div className="verify">
            <InputForm
              onChange={(e) => setOtp(e.target.value)}
              defaultValue={0}
              type="number"
              title="Verification code"
              name={"Verification code"}
              Width="200px"
              Bottom="8px"
            ></InputForm>
            <Button
              onClick={getOTP}
              Top="28px"
              Width="128px"
              title=" Get code"
              BackgroundColor=" #FEBA46"
            ></Button>
          </div>
          <p style={{fontWeight:"500",fontSize:"14px",lineHeight:"140%",color:"#828485",margin:"0"}}>Enter the 6-digit code we sent to your email</p>
          <Button
            onClick={handlerConfirm}
            Width="190px"
            title="Transfer"
            Top="32px"
            Left="0px"
            BackgroundColor={"#4F6EF6"}
          ></Button>
        </div>
      </div>
    </TransferStyled>
  );
}
