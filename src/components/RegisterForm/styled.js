import styled from "styled-components";

const Register = styled.div`
margin-top:50px;
  display: flex;
  flex-direction: column;
  width: 462px;
  min-height: 508px;
  background-color: #ffffff;
  border-radius: 15px;
  align-items: center;
  /* justify-content: center; */

  .SignInTitle {
    margin-top: 60px;
    font-size: 32px;
    font-weight: bold;
  }
  .create {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .createHere {
    margin-left: 5px;
    color: blue;
  }
  .dualColumn{
    width:350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* padding-top:20px; */
  }
`;

export default Register;
