import React, { Component } from "react";
import SideMenu from "../../components/SideMenu";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import Button from  "../../components/Button";

import TransferStyled from "./styled";
import moment from "moment";
import axios from "axios";
import { render } from "@testing-library/react";

export default function TransferPage(){
    return (
        <TransferStyled>
            <SideMenu></SideMenu>
            <div className="containerForm">
                <h3 className="title">Transfer funds</h3>
                <br />
                <div>
                    <p>Transfer style </p>
                    <input
                        defaultChecked
                        type="radio"
                        name="transferstyle"
                        defaultValue="intra"
                        />{" "}
                        Intra bank 
                        <br />
                        <input
                        type="radio"
                        name="transferstyle"
                        defaultValue="inter"
                        />{" "}
                        Inter Bank
                </div>
                <br />
                <div>
                   
                    <InputForm
                        defaultValue={0}
                        value={0}
                        type="number"
                        title="Available Balance"
                        name={"balance"}
                    ></InputForm>
                    <InputForm
                        defaultValue={""}
                        value={""}
                        type="text"
                        title="Beneficiary account"
                        name={"bankaccount"}
                    ></InputForm>
                    <InputForm
                        defaultValue={0}
                        value={0}
                        type="text"
                        title="Amount"
                        name={"amount"}
                        
                    ></InputForm>
                      <TextArea
                        value={"Tien HP"}
                        type="text"
                        title="Remark "
                        name={"remark"}
                      
                        ></TextArea>
                    <Button  Width="190px" title="Tranfer" BackgroundColor={"#4F6EF6"} ></Button>
                </div>
                

            </div>
        </TransferStyled>
      
        
    );
};
