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
export default function TransferPage() {
  const [spendAccounts, setSpendAccount] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(0);
  const [beneficiary, setBeneficiary] = useState(0);
  const [amount, setAmount] = useState(0);
  const [remark, setRemark] = useState("");
  const [spendArrays, setSpendArrays] = useState([]);
  const [currentAccount, setCurrentAccount] = useState("");
  const [reLoad, setReload] = useState(new Date());
  // const [transferType, setTransferType] = useState("Intra");
  let transferType = "intra";
  function getAvailableBalance(cardNumber) {
    setCurrentAccount(cardNumber);
    _.forEach(spendArrays, (item) => {
      if (item.card_number == cardNumber) {
        setAvailableBalance(item.balance);
      }
    });
  }
  async function handleCheckBeneficiary() {}
  async function handleTransfer() {
    // console.log("beneficiary: ", beneficiary);
    await axios
      .post(`http://localhost:1337/spend-accounts-transfer-intra`, {
        currentAccount: currentAccount,
        remark: remark,
        amount: amount,
        beneficiaryAccount: beneficiary,

        // headers: {
        //   Authorization:
        //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc2OTM4MTUwLCJleHAiOjE1Nzk1MzAxNTB9.UgsjjXkAZ-anD257BF7y1hbjuY3ogNceKfTAQtzDEsU",
        // },
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Transfer Successful");
          setReload(new Date());
        }
      })

      .catch(function (error) {
        alert(error);
      });
  }
  let spendAccountsArray = [];
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `http://localhost:1337/spend-accounts-by-owneraccount?id=${
          JSON.parse(localStorage.getItem("userAccount")).id
        }`
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
          <p className="titleType">Transfer type </p>
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
          />
        </div>
        <br />
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
            <Select options={techCompanies} />
          </div>
          <InputForm
            onChange={(e) => setBeneficiary(e.target.value)}
            type="text"
            title="Beneficiary account"
            name={"bankaccount"}
            placeholder={"Enter account number"}
          ></InputForm>

          <InputForm
            onChange={(e) => setAmount(e.target.value)}
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
          ></TextArea>
          <Button
            onClick={handleTransfer}
            Width="190px"
            title="Transfer"
            BackgroundColor={"#4F6EF6"}
          ></Button>
        </div>
      </div>
    </TransferStyled>
  );
}
