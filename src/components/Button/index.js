// import React, { Component } from "react";
import Button from "./styled";
// export default class index extends Component {
//   handleClick() {
//     alert("hihihi");
//   }
//   render() {
//     console.log("this.props: ", this.props);
//     return (
//
//     );
//   }
// }

import React from "react";

export default function index({onClick,title}) {
    console.log('onClick: ', onClick);
  return (
    <Button>
      <button onClick={onClick} className="">
        <p>{title} </p>
      </button>
    </Button>
  );
}
