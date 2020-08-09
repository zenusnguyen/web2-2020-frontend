import React, { useState, useEffect } from "react";
import MaganerAccountStyled from "./styled";
import Button from "../../components/Button";
import SideMenu from "../../components/SideMenu";
import Select from "react-select";
import InputForm from "../../components/InputForm";
import moment from "moment";
import axios from "axios";
import * as _ from "lodash";
function SpendCard() {
  const [accountType, setAccountType] = useState(1);
  const [currency, setCurrency] = useState("VND");

  const [id, setID] = useState(
    Math.floor(100000000000 + Math.random() * 900000000000)
  );

  const handleClick = async () => {
    const createCard = await axios.post(
      "http://localhost:1337/spend-accounts",
      {
        balance: 0,
        card_type: "spend",
        currency_unit: currency,
        spend_type: accountType,
        card_number: id.toString(),
        account_id: JSON.parse(localStorage.getItem("userAccount")).id,
        status: "pending",
        created_date: new Date(),
      }
    );
    if (createCard.status === 200) {
      setID(Math.floor(100000000000 + Math.random() * 900000000000));
      alert("Create Card success");
    } else {
      alert("Create Card fail");
    }
  };

  return (
    <div className="spendCard">
      <div className="selector">
        <p>Account type</p>
        <select onChange={(e) => setAccountType(parseInt(e.target.value))}>
          <option value="1">Silver</option>
          <option value="2">Gold</option>
          <option value="3">Platinum</option>
        </select>
      </div>
      <div className="selector">
        <p>Currency unit</p>
        <select onChange={(e) => setCurrency(e.target.value)}>
          <option value="VND">₫ VND - Vietnamese Dong</option>
          <option value="USD"> $ USD- Dollar</option>
        </select>
      </div>
      <div className="accountNumber">
        <p>Your account number</p>
        <input type="text" disabled={true} value={id}></input>
      </div>
      <Button onClick={handleClick} Width="190px" title="Open Card"></Button>
    </div>
  );
}

function SavingCard() {
  const [currency, setCurrency] = useState("VND");
  const [term, setTerm] = useState(1);
  const [interest, setInterest] = useState("1");

  const [id, setID] = useState(
    Math.floor(100000000000 + Math.random() * 900000000000)
  );
  const [interestOption, setInterestOption] = useState([]);
  const [maturityDate, setMaturityDate] = useState(moment().add(1, "M"));
  const originDate = moment();
  const currencyOption = [
    { label: "VND", value: "VND" },
    { label: "USD", value: "USD" },
  ];
  let tempOptions = [];
  const [interestExample, setInterestExample] = useState(4600);
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(`http://localhost:1337/interest-rates`);

      _.forEach(result.data, (item) => {
        tempOptions.push({
          label: ` ${item.period} month - Interest rate ${item.interest_rate} %`,
          value: item.id,
        });
      });
      setInterestOption(tempOptions);
    }
    Fecth();
  }, []);
  // eslint-disable-next-line no-extend-native

  const handlerDate = (value) => {
    setMaturityDate(
      moment(originDate).add(parseInt(value.label.trim().split(" ")[0]), "M")
    );
    setInterestExample(
      1000000 *
        (parseFloat(
          value.label.trim().split(" ")[
            value.label.trim().split(" ").length - 2
          ]
        ) /
          100)
    );

    setInterest(value);
  };

  const handleClick = async () => {
    const createCard = await axios.post(
      "http://localhost:1337/spend-accounts",
      {
        card_type: "saving",
        currency_unit: currency,
        term_deposit_id: parseInt(term),
        card_number: id.toString(),
        account_id: JSON.parse(localStorage.getItem("userAccount")).id,
        status: "pending",
        balance: 0,
        created_date: new Date(),
      }
    );
    if (createCard.status === 200) {
      setID(Math.floor(100000000000 + Math.random() * 900000000000));
      alert("Create Card success");
    } else {
      alert("Create Card fail");
    }
  };

  return (
    <div className="dualColumn">
      <div className="spendCard">
        <div className="selector">
          <p>Currency unit</p>
          <Select
            options={currencyOption}
            onChange={(e) => setCurrency(e.value)}
            defaultValue={{ label: "VND", value: "VND" }}
          />
        </div>
        <div className="selector">
          <p>Term</p>

          <Select
            options={interestOption}
            onChange={(e) => handlerDate(e)}
            defaultValue={{
              label: " 1 month - Interest rate 4.6%",
              value: "1",
            }}
          />
        </div>
        <InputForm
          Top="24px"
          title="Maturity date"
          value={moment(maturityDate).format("DD-MM-YYYY")}
        ></InputForm>
        <p>Interest payment option </p>
        <form className="selectCard">
          <input
            checked="true"
            type="radio"
            name="gender"
            defaultValue="spend"
          />{" "}
          Add into my Spend account
          <br />
          <input type="radio" name="gender" defaultValue="saving" /> Add to the
          balance and renew for another term
        </form>

        <div className="selector">
          <p>Term</p>

          <Select
            options={interestOption}
            onChange={(e) => handlerDate(e)}
            defaultValue={{
              label: " 1 month - Interest rate 4.6%",
              value: "1",
            }}
          />
        </div>
        <div className="accountNumber">
          <p>Your account number</p>
          <input type="text" disabled={true} value={id}></input>
        </div>
        <Button onClick={handleClick} Width="190px" title="Open Card"></Button>
      </div>
      <div className="example">
        <InputForm
          title="Example, if you want to deposit"
          value="₫ 1,000,000"
        ></InputForm>
        <InputForm
          title="So the total interest will be"
          value={interestExample}
        ></InputForm>
        <InputForm
          title="And your balance at maturity date will be"
          value={interestExample + 1000000}
        ></InputForm>
      </div>
    </div>
  );
}

export default function CreateCard() {
  const [isSaving, setIsSaving] = useState(false);
  const Handler = () => {
    setIsSaving(!isSaving);
  };
  if (isSaving)
    return (
      <MaganerAccountStyled>
        <SideMenu></SideMenu>
        <div className="containerForm">
          <p className="SignInTitle"> Open new account</p>
          <p>I want to open </p>
          <form className="selectCard">
            <input
              checked={!isSaving}
              type="radio"
              name="spend"
              onClick={Handler}
              defaultValue="spend"
            />
            Spend account
            <br />
            <input
              checked={isSaving}
              type="radio"
              name="saving"
              onClick={Handler}
              defaultValue="saving"
            />
            Savings account
          </form>

          <SavingCard></SavingCard>
        </div>
      </MaganerAccountStyled>
    );
  else {
    return (
      <MaganerAccountStyled>
        <SideMenu></SideMenu>
        <div className="containerForm">
          <p className="SignInTitle"> Open new account</p>
          <p>I want to open </p>
          <form className="selectCard">
            <input
              checked={!isSaving}
              type="radio"
              name="spend"
              onClick={Handler}
              defaultValue="spend"
            />{" "}
            Spend account
            <br />
            <input
              checked={isSaving}
              type="radio"
              name="saving"
              onClick={Handler}
              defaultValue="saving"
            />{" "}
            Savings account
          </form>

          <SpendCard></SpendCard>
        </div>
      </MaganerAccountStyled>
    );
  }
}
