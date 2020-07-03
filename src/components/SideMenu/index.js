import React from "react";
import SideMenuStyle from "./styled";
import YellowIcon from "../../assets/yellow.png";
import TabMenu from "../TabMenu";

export default function index() {
  const ListMenu = [
    {
      key: 1,
      title: "Home",
      src: "../../assets/home.png",
      link: "/register",
    },
    {
      key: 2,
      title: "Transfer funds",
      src: "../../assets/transfer.png",
    },
    {
      key: 3,
      title: "Manage accounts",
      src: "../../assets/card.png",
    },
    {
      key: 4,
      title: "Edit profile",
      src: "../../assets/person.png",
    },
    {
      key: 5,
      title: "Sign out",
      src: "../../assets/signout.png",
    },
  ];
  const RenderMenu = () => {
    return ListMenu.map((items) => (
      <TabMenu
        key={items.key}
        title={items.title}
        src={items.src}
        link={items.link}
      ></TabMenu>
    ));
  };
  return (
    <SideMenuStyle>
      <img src={YellowIcon}></img>
      <RenderMenu ListMenu></RenderMenu>
    </SideMenuStyle>
  );
}
