import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import AddIcon from "../../assets/add-outline.png";
import DatePicker from "react-datepicker";
import { MyDatePickerStyle } from "./styled";
import Calendar from "../../assets/calendar.png";
import SideMenu from "../../components/SideMenu";
import InputForm from "../../components/InputForm";
import { Register } from "./styled";
import Back from "../../assets/back.svg";
import TextArea from "../../components/TextArea";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { config } from "../../configs/server";
export default function EditProfile(props) {
  const accountInfo = props.data;
  const [DateOfBirth, setDateOfBirth] = useState(new Date());
  const [img1, setImgUrl1] = useState(null);
  const [img2, setImgUrl2] = useState(null);
  const [DateOfIssue, setDateOfIssue] = useState(new Date());
  const [userInfo, setUserInfo] = useState("");
  const [pic1, setPic1] = useState(null);
  const [pic2, setPic2] = useState(null);
  const [fullName, setFullName] = useState(userInfo.full_name);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phone_number);
  const [address, setAddress] = useState(userInfo.address);
  const [passport, setPassport] = useState(userInfo.identificationNumber);

  let history = useHistory();
  const alert = useAlert();
  useEffect(() => {
    async function Fecth() {
      const result = await axios.get(
        `${config.server}/customer-infors/?id=${props.data.user_info}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUserInfo(result.data[0]);
      setDateOfBirth(new Date(result.data[0].date_of_birth));
      setDateOfIssue(new Date(result.data[0].date_of_issue));
      setImgUrl1(`${config.server}${result.data[0].img1}`);
      setImgUrl2(`${config.server}${result.data[0].img2}`);
    }

    Fecth();
  }, []);
  function convertBase64(file) {
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        // reader.result;

        setPic1(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function convertBase642(file) {
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        setPic2(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  async function handleSubmit() {
    let data = new FormData();
    let uploadRes;
    if (pic1 && pic2) {
      const createUserInfor = await axios.put(
        `${config.server}/customer-infors/${accountInfo.user_info}`,
        {
          full_name: fullName,
          phone_number: phoneNumber,
          address: address,
          date_of_birth: DateOfBirth,
          date_of_issue: DateOfIssue,
          identificationNumber: passport,
          img1: pic1,
          img2: pic2,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert.success("Action success");

      setTimeout(function () {
        history.go(0);
      }, 1500);
    } else if (!pic1 && !pic2) {
      const createUserInfor = await axios.put(
        `${config.server}/customer-infors/${accountInfo.user_info}`,
        {
          full_name: fullName,
          phone_number: phoneNumber,
          address: address,
          date_of_birth: DateOfBirth,
          date_of_issue: DateOfIssue,
          identificationNumber: passport,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert.success("Action success");

      setTimeout(function () {
        history.go(0);
      }, 1500);
    } else {
      alert.error("please upload both of picture ");
    }
  }

  const getPreview = (img) =>
    img !== null
      ? {
          border: "0px",
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + img + ")",
          backgroundSize: "cover",
          border: "0px",
        }
      : {
          backgroundImage: "url(" + AddIcon + ")",
          backgroundSize: "cover",
          border: "0px",
        };

  const handleChangePic = (e, pic) => {
    // e.preventDefault();

    if (e.target.files[0].size >= 0.5 * 1024 * 1024) {
      alert.error("Max size of an image: 0.5 MB");
    } else {
      if (pic === "pic1") {
        convertBase64(e.target.files[0]);
        setImgUrl1(URL.createObjectURL(e.target.files[0]));
      } else if (pic === "pic2") {
        convertBase642(e.target.files[0]);
        setImgUrl2(URL.createObjectURL(e.target.files[0]));
      }
    }
  };

  const Button = styled.button`
    /* Insert your favorite CSS code to style a button */

    width: 100px;
    height: 100px;
    /* background-color: white; */
    border-style: dashed;
  `;

  const handleClick1 = (event) => {
    document.getElementById("hiddenFileInput").click();
  };

  const handleClick2 = (event) => {
    document.getElementById("hiddenFileInput2").click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };

  return (
    <Register>
      <SideMenu></SideMenu>
      <div className="containerForm">
        <div onClick={props.onClick} className="back">
          <img src={Back}></img>
          {props.backTitle || "All customers"}
        </div>
        <p className="SignInTitle">Edit Profile</p>
        <InputForm
          value={accountInfo.email}
          type="email"
          title="Email"
        ></InputForm>
        <InputForm
          type="text"
          value={accountInfo.username}
          title="Username"
        ></InputForm>

        <InputForm
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          placeholder={userInfo.full_name}
          type="text"
          title="Fullname (edit)"
        ></InputForm>
        <div className="dualColumn">
          <InputForm
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            placeholder={userInfo.phone_number}
            type="number"
            title="Phone number (edit)"
            Width="160px"
          ></InputForm>
          <MyDatePickerStyle>
            <div>
              <p>Date of birth</p>
              <DatePicker
                selected={DateOfBirth}
                onChange={(e) => setDateOfBirth(e)}
              ></DatePicker>
            </div>
            {/* <img src={Calendar}></img> */}
          </MyDatePickerStyle>
        </div>
        <TextArea
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={userInfo.address}
          type="text"
          title="Current address"
        ></TextArea>
        <div className="dualColumn">
          <InputForm
            // onChange={(e) => {
            //   setPassport(e.target.value);
            // }}
            value={userInfo.identificationNumber}
            pattern="[0-9]"
            type="number"
            title=" ID/ Passport number"
            Width="160px"
          ></InputForm>
          <MyDatePickerStyle>
            <div>
              <p>Date of Issue</p>
              <DatePicker
                selected={DateOfIssue}
                onChange={(e) => setDateOfIssue(e)}
              ></DatePicker>
            </div>
            {/* <img src={Calendar}></img> */}
          </MyDatePickerStyle>
        </div>
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "8px",
            }}
          >
            Photos
          </p>
          <div className="uploadImage">
            <div style={{ marginRight: "10px" }}>
              <Button style={{ padding: "0px" }} onClick={handleClick1}>
                <img style={getPreview(img1)}></img>
              </Button>
              <input
                type="file"
                id="hiddenFileInput"
                onChange={(e) => {
                  handleChangePic(e, "pic1");
                }}
                style={{ display: "none" }}
              />
              <p
                style={{
                  textAlign: "center",
                  margin: "8px 0 0 0",
                  color: "#828485",
                }}
              >
                Front
              </p>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <Button style={{ padding: "0px" }} onClick={handleClick2}>
                <img style={getPreview(img2)}></img>
              </Button>
              <input
                type="file"
                id="hiddenFileInput2"
                onChange={(e) => {
                  handleChangePic(e, "pic2");
                }}
                style={{ display: "none" }}
              />
              <p
                style={{
                  textAlign: "center",
                  margin: "8px 0 0 0",
                  color: "#828485",
                }}
              >
                Back
              </p>
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} className="registerButton">
          Save
        </button>
      </div>
    </Register>
  );
}
