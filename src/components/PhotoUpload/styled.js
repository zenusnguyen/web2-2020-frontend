import styled from "styled-components";

const UploadPhotoStyled = styled.div`
 .updatepage {
  color: #F9A503;
  justify-content: space-around;
  margin: 0 auto;
  background: white;
  width: 90%;
  height: 70%;
  box-sizing: border-box;
  border-radius: 10px;
  min-height: 500px;
  position: absolute;
  z-index: 100;
  top: 10%;
}
.updatepage img {
  width: 280px;
  height: 125px;
  margin: 5% 0 0 0;
}
.updatepage h5 {
  font-family: SF Pro Text;
  font-size: 24px;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
}
.updatepage p {
  font-size: 15px;
  line-height: 30px;
  color: #444444;
}
.updatepage form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 400px;
  padding: 20px 30px;
  height: 100%;
}
.updatepage form > input {
  width: 100%;
  height: 36px;
  border-radius: 6px;
  font-family: SF-Pro-Text-Light;
  border: 1px solid #999898;
  color: #444444;
  font-size: 15px;
  line-height: 18px;
}
.updatepage-flex {
  display: flex;
  justify-content: space-between;
}
.updatepage-flex input + input {
  margin-left: 16px;
}
.updatepage-flex div input {
  position: relative;
  font-size: 80px;
  font-weight: 100;
  border-radius: 6px;
  height: 90px;
  background-color: rgba(255, 255, 255, 0.25);
  border: 1px solid #999898;
  color: #999898;
  cursor: pointer;
  background-image: url("../../Image/plus.png");
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  overflow: visible;
  padding: 90px 0 0 0;
  margin: 0;
  width: 100%;
  z-index: 49;
}

.updatepage-button-group {
  display: flex;
  justify-content: center;
  margin: 16px auto;
}
.updatepage-button-group input + button {
  margin-left: 16px;
}
.updatepage-button-group button,
.updatepage-button-group input {
  width: 135px;
  height: 48px;
  border-radius: 10px;
  font-size: 17px;
  line-height: 22px;
  color: white;
  background: #FB7E0C;
  border: none;
  cursor: pointer;
  position: relative;
  margin: 0;
  padding: 0;
}
.updatepage-back-button {
  background: linear-gradient(90deg, #914eff -7.18%, #b689ff 100%);
}
.updatepage-update-button {
  background: linear-gradient(90deg, #dc621d -7.18%, #fda531 139.49%);
}
p.mini {
  font-size: 11px;
  line-height: 18px;
  margin-top: 6px;
  color: #BDBDBD;
}

/* .updatepage-flex > input:before {
  position: absolute;
  top: calc(50% - 9px);
  width: 100%;
  height: auto;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 18px;
  font-family: SF-Pro-Text-Regular;
  color: #444444;
  text-align: center;
  z-index: 10;
}
.input:before:before {
  opacity: 0.5;
}
.before:before {
  content: "Mặt trước";
}
.after:before {
  content: "Mặt sau";
} */
.updatepage-flex .add-cmnd p {
  position: absolute;
  top: calc(50% - 9px);
  width: 100%;
  height: auto;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 18px;
  font-family: SF-Pro-Text-Regular;
  color: #444444;
  text-align: center;
  z-index: 10;
}
.updatepage-flex .add-cmnd {
  position: relative;
  max-width: 200px;
  height: 92px;
}
/* Sure Submit Popup CSS */
.suresubmit {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  height: 100vh;
  text-align: center;
  z-index: 50;
  min-width: 270px;
}
.sure-popup {
  width: 70%;
  border: 1px solid white;
  background: white;
  height: 150px;
  padding: 10px;
  border-radius: 10px;
  position: fixed;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}
.sure-popup p {
  color: #f9a503;
  font-family: SF-Pro-Text-Medium;
  font-size: 20px;
  margin: 20px 0;
}
.sure-popup button {
  color: white;
  background: #fb7e0c;
  box-shadow: none;
}

`;

export default UploadPhotoStyled;
