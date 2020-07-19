import React, { Component } from "react";
import SideMenu from "../../components/SideMenu";
import InputForm from "../../components/InputForm";
import TextArea from "../../components/TextArea";
import SpendCard from "../../assets/spend.png"; 
import Button from  "../../components/Button";

import TransferStyled from "./styled";
import moment from "moment";
import axios from "axios";
import { render } from "@testing-library/react";

export default function SpendAccountPage(){
    return (
        <SpendingAccountStyled>
            <SideMenu></SideMenu>
            <div className="containerForm">
                <h2 className="title">1760125</h2>
                <br />
                <h3>Information </h3>
                <div class="flex">
                    <div class="div">
                        <SpendCard></SpendCard>
                    </div>  
                    <div class="div flex">
                        <div class="mid">
                            <p>Account number: </p>
                            <p>Account type: </p>
                            <p>Current balance: </p>
                            <p>Status: </p>
                        </div>
                        <div class="mid">
                            <p>1760125 </p>
                            <p>platium </p>
                            <p>10000 </p>
                            <p>active </p>
                        </div>
                    </div>
                    <div class="div pt flex" >
                        <button class="blue" type="button">Transfer</button>
                        <button class="blue" type="button">Withdraw</button>
                        <button type="button">Block account</button>
                        <button type="button">Close account</button>
                    </div>
                </div>
                <br />
                <h2 className="title">History</h2>
                <div class="flex">
                    <div class="div">
	                    <p>Transition type </p>
                        <select class="type">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>  
                    <div class="div">
                        <p>Transition type </p>
                        <select class="type">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div class="div" >
	                    <p>Transition type </p>
                            <input class="type bor" type="date" id="birthday" name="birthday"/>

                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </SpendingAccountStyled>
    );
};
