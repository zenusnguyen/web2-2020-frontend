import React, { Component, useEffect, useState } from "react";
import LandingPageStyle from "./styled";
import Header from "../../components/Header";
import Hero from "../../assets/hero.svg";
import Img1 from "../../assets/img1.svg";
import Img2 from "../../assets/img2.svg";
import Img3 from "../../assets/img3.svg";
import Img4 from "../../assets/img4.svg";
import Spend from "../../assets/spend-acc.svg";
import Savings from "../../assets/save-acc.svg";

export default function LandingPage() {
  return (
    <LandingPageStyle>
      <Header Height="100px" Shadow="0" CTA="flex" Href="/"></Header>
      <div style={{ maxWidth: "1440px", width: "100%" }}>
        <div className="hero">
          <h1 style={{ marginTop: "80px", width: "838px", height: "200px" }}>
            Make your money move.
          </h1>
          <h4 style={{ marginBottom: "60px", textAlign: "center" }}>
            The most minimalist internet banking you can find out there.
          </h4>
        </div>

        <div style={{ textAlign: "center" }}>
          <button className="CTAbutton">Join now</button>
        </div>

        <div style={{ textAlign: "center" }}>
          <img src={Hero} alt="hero" style={{ margin: "120px auto" }}></img>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2 style={{ margin: "auto", width: "904px", height: "140px" }}>
            yellow<span style={{ color: "#FEBA46" }}>.</span> is just like a
            regular bank but way better
          </h2>
        </div>

        <div className="card">
          <div className="card-left">
            <h3 style={{ marginBottom: "16px" }}>Secure, fast and easy</h3>
            <h4 style={{ width: "475px", textAlign: "left" }}>
              Protect your bank account from fraudsters by requiring a
              two-factor authentication (2FA) to validate every transaction.
            </h4>
          </div>
          <img className="card-right" src={Img1} style={{}}></img>
        </div>

        <div style={{ textAlign: "center", background: "#4F6EF6" }}>
          <div style={{ background: "#4F6EF6", height: "100px" }}></div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "16px", color: "#FFFFFF" }}>
              Interbank money transfer
            </h2>
            <h4 style={{ textAlign: "center", color: "#FFFFFF" }}>
              Fast free money transfers across 21+ domestic banks on the HCMUS
              network.
            </h4>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={Img2} style={{ margin: "100px auto" }}></img>
          </div>
        </div>

        <div className="card">
          <img className="card-left" src={Img3} style={{}}></img>
          <div className="card-right">
            <h3 style={{ marginBottom: "16px" }}>Attractive benefits</h3>
            <h4 style={{ width: "475px", textAlign: "left" }}>
              Discounts, promotions and deals at select merchants and retailers
              across the nation. No monthly fees, no overdraft.
            </h4>
          </div>
        </div>

        <div style={{ textAlign: "center", background: "#F3F7FB" }}>
          <div className="card" style={{ background: "#F3F7FB" }}>
            <div className="card-left">
              <h3
                style={{
                  marginBottom: "16px",
                  width: "279px",
                  lineHeight: "127%",
                }}
              >
                Competitive interest rates
              </h3>
              <h4 style={{ width: "380px", textAlign: "left" }}>
                Interest on all term deposits is calculated daily on the whole
                balance of the account and paid at maturity.
              </h4>
            </div>
            <img
              className="card-right"
              src={Img4}
              style={{ marginTop: "100px" }}
            ></img>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              margin: "auto",
              marginBottom: "32px",
              width: "522px",
              lineHeight: "117%",
            }}
          >
            Get them both,<br></br> no need to choose
          </h2>
          <h4 style={{ textAlign: "center" }}>
            Open as many accounts as you want, no extra fees.
          </h4>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0 165px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <img
                  src={Spend}
                  style={{ textAlign: "center", margin: "60px 30px" }}
                ></img>
              </div>
              <div>
                <img
                  src={Savings}
                  style={{ textAlign: "center", margin: "60px 30px" }}
                ></img>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button className="CTAbutton" style={{ marginBottom: "120px" }}>
              Join now
            </button>
          </div>

          <div style={{ textAlign: "center" }}>
            <h4 style={{ textAlign: "center", marginBottom: "32px" }}>
              Copyright © 2020 Yellow
            </h4>
          </div>
        </div>
      </div>
    </LandingPageStyle>
  );
}
