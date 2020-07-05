import DatePicker from "react-datepicker";
import React from "react";
import MyDatePickerStyle from "./styled";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../../assets/calendar.png";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class MyDatePicker extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <MyDatePickerStyle>
        <div>
          <p>{this.props.title}</p>
          <DatePicker
            selected={new Date()}
            onChange={this.handleChange}
          ></DatePicker>
        </div>
        <img src={Calendar}></img>
      </MyDatePickerStyle>
    );
  }
}
