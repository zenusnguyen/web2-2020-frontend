import React, { useState, useEffect } from "react";
import MaganerAccountStyled from "./styled";
import Button from "../../components/Button";
import SideMenu from "../../components/SideMenu";
import Select from "react-select";
import InputForm from "../../components/InputForm";
import moment from "moment";
import axios from "axios";
import { config } from "../../configs/server";
import * as _ from "lodash";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import Back from "../../assets/back.svg";

function SpendCard() {  
  const [accountType, setAccountType] = useState(1);
  const [currency, setCurrency] = useState("VND");
  let history = useHistory();
  const alert = useAlert();
  const [id, setID] = useState(
    Math.floor(100000000000 + Math.random() * 900000000000)
  );
  const currencyOption = [
    { label: "VND", value: "VND" },
    { label: "USD", value: "USD" },
  ];

  const accountOption = [
    { label: "Silver", value: "1" },
    { label: "Gold", value: "2" },
    { label: "Platinum", value: "3" },
  ];
  const handleClick = async () => {
    const createCard = await axios;
    axios
      .post(
        `${config.server}/spend-accounts`,
        {
          balance: 0,
          card_type: "spend",
          currency_unit: currency,
          spend_type: accountType,
          card_number: id.toString(),
          account_id: JSON.parse(localStorage.getItem("userAccount")).id,
          status: "active",
          created_date: new Date(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((result) => {
        setID(Math.floor(100000000000 + Math.random() * 900000000000));
        alert.success("Create card successful!");
        setTimeout(function () {
          history.push("/manage");
        }, 1500);
      })
      .catch((err) => alert.error("Create card failed!"));
  };
  return (
    <div className="spendCard">
      <div className="selector">
        <p>Account type</p>
        <Select
          options={accountOption}
          onChange={(e) => setAccountType(e.value)}
          defaultValue={{
            label: "Silver",
            value: "1",
          }}
        />
      </div>
      <div className="selector">
        <p>Currency unit</p>
        <Select
          options={currencyOption}
          onChange={(e) => setCurrency(e.value)}
          defaultValue={{ label: "VND", value: "VND" }}
        />
      </div>
      <div className="accountNumber">
        <p className="titleType" style={{ marginBottom: "4px" }}>
          Your account number
        </p>
        <input type="text" disabled={true} value={id}></input>
      </div>
      <Button
        onClick={handleClick}
        Width="190px"
        title="Opend Card"
        Top="32px"
        BackgroundColor={"#4F6EF6"}
        Left="0px"
      ></Button>
    </div>
  );
}

function SavingCard() {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  const [currency, setCurrency] = useState("VND");
  const [term, setTerm] = useState(1);
  const [interest, setInterest] = useState("1");
  const [spendAccounts, setSpendAccounts] = useState("");
  const [spendAccountList, setSpendAccountList] = useState([]);
  const [paymentOption, setPaymentOption] = useState(true);
  const [isHidden, setIsHidden] = useState("");
  const alert = useAlert();
  const [id, setID] = useState(
    Math.floor(100000000000 + Math.random() * 900000000000)
  );
  const [interestOption, setInterestOption] = useState([]);
  const [maturityDate, setMaturityDate] = useState(moment().add(1, "M"));
  const originDate = moment();
  let history = useHistory();
  const handlePaymentOption = () => {
    if (!paymentOption) {
      setPaymentOption(!paymentOption);

      setIsHidden("");
    } else {
      setPaymentOption(!paymentOption);
      setIsHidden("none");
    }
  };

  const currencyOption = [
    { label: "VND", value: "VND" },
    { label: "USD", value: "USD" },
  ];
  let tempOptions = [];
  let spendAccountsArray = [];
  const [interestExample, setInterestExample] = useState(4600);
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(`${config.server}/interest-rates`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      _.forEach(result.data, (item) => {
        tempOptions.push({
          label: ` ${item.period} month - Interest rate ${item.interest_rate} %`,
          value: item.id,
        });
      });
      setInterestOption(tempOptions);
    }
    Fecth();
    async function FecthSpendAccount() {
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

      _.forEach(result.data, (item) => {
        if (item.status === "active" && item.card_type === "spend") {
          spendAccountsArray.push({
            label: `${item.card_number}`,
            value: `${item.card_number}`,
          });
        }
        setSpendAccountList(spendAccountsArray);
      });
    }
    FecthSpendAccount();
  }, []);
  // eslint-disable-next-line no-extend-native

  const handlerDate = (value) => {
    setMaturityDate(
      new Date(
        moment(originDate).add(parseInt(value.label.trim().split(" ")[0])),
        "M"
      )
    );
    setInterestExample(
      1000000 *
        (parseFloat(
          value.label.trim().split(" ")[
            value.label.trim().split(" ").length - 2
          ]
        ) /
          100).toFixed(10)
    );

    setInterest(value);
  };

  const handleClick = async () => {
    if (paymentOption && spendAccounts.length === 0) {
      alert.error("Please choose beneficiary account");
    } else {
      await axios
        .post(
          `${config.server}/spend-accounts-saving`,
          {
            card_type: "saving",
            currency_unit: currency,
            interest_rate_id: parseInt(term),
            card_number: id.toString(),
            account_id: JSON.parse(localStorage.getItem("userAccount")).id,
            status: "pending",
            balance: 0,
            created_date: new Date(),
            final_settlement_type: paymentOption,
            beneficiary_account: spendAccounts,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((result) => {
          setID(Math.floor(100000000000 + Math.random() * 900000000000));
          alert.success("Create Card successful!");
          setTimeout(function () {
            history.push("/manage");
          }, 1500);
        })
        .catch((err) => alert.error("Create Card failed!"));
    }
  };

  return (
    <div className="dualColumn3">
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
          title="Maturity date"
          value={moment(maturityDate).format("DD-MM-YYYY")}
        ></InputForm>
        <div style={{ width: "450px", marginBottom: "20px" }}>
          <p className="titleType" style={{ marginBottom: "4px" }}>
            Interest payment option{" "}
          </p>
          <input
            checked={!paymentOption}
            type="radio"
            name="gender"
            defaultValue="saving"
            onChange={(e) => {
              handlePaymentOption();
            }}
          />{" "}
          Add interest to the balance and renew for another term
          <br />
          <input
            checked={paymentOption}
            type="radio"
            name="gender"
            defaultValue="spend"
            onChange={(e) => {
              handlePaymentOption();
            }}
          />{" "}
          Add into a Spend account and close this account
        </div>

        <div className="selector" style={{ display: isHidden }}>
          <p> Select a Spend account</p>
          <Select
            options={spendAccountList}
            onChange={(e) => setSpendAccounts(e.value)}
            defaultValue={{
              label: spendAccountList[0],
              value: spendAccountList[0],
            }}
          />
        </div>
        <div className="accountNumber">
          <p className="titleType" style={{ marginBottom: "4px" }}>
            Your account number
          </p>
          <input type="text" disabled={true} value={id}></input>
        </div>
        <Button
          onClick={handleClick}
          Width="190px"
          title="Opend Card"
          Top="32px"
          BackgroundColor={"#4F6EF6"}
          Left="0px"
        ></Button>
      </div>
      <div className="example">
        <InputForm
          title="Example, if you want to deposit"
          value="₫1,000,000"
        ></InputForm>
        <InputForm
          title="So the total interest will be"
          value={formatter.format(interestExample)}
        ></InputForm>
        <InputForm
          title="And your balance at maturity date will be"
          value={formatter.format(interestExample + 1000000)}
        ></InputForm>
      </div>
    </div>
  );
}

export default function CreateCard(props) {
  const [isSaving, setIsSaving] = useState(false);
  const Handler = () => {
    setIsSaving(!isSaving);
  };
  let history = useHistory();
  if (isSaving)
    return (
      <MaganerAccountStyled>
        <SideMenu></SideMenu>
        <div className="containerForm">
          <div
            onClick={() => {
              history.push("/manage");
            }}
            className="back"
          >
            <img src={Back}></img>
            Manage accounts
          </div>
          <p className="SignInTitle"> Open new account</p>
          <div style={{ marginBottom: "20px" }}>
            <p className="titleType" style={{ marginBottom: "4px" }}>
              I want to open
            </p>
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
          </div>
          <SavingCard></SavingCard>
        </div>
      </MaganerAccountStyled>
    );
  else {
    return (
      <MaganerAccountStyled>
        <SideMenu></SideMenu>
        <div className="containerForm">
          <div
            onClick={() => {
              history.push("/manage");
            }}
            className="back"
          >
            <img src={Back}></img>
            Manage accounts
          </div>
          <p className="SignInTitle"> Open new account</p>
          <div style={{ marginBottom: "20px" }}>
            <p className="titleType" style={{ marginBottom: "4px" }}>
              I want to open{" "}
            </p>
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
          </div>
          <SpendCard></SpendCard>
        </div>
      </MaganerAccountStyled>
    );
  }
}
