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
      // link: "/home",
    },
    {
      key: 3,
      title: "Manage accounts",
      src: "../../assets/card.png",
      link: "/manage",
    },
    {
      key: 4,
      title: "Profile",
      src: "../../assets/person.png",
      link: "/profile",
    },
    {
      key: 5,
      title: "Sign out",
      src: "../../assets/signout.png",
      link:"/signout",
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
