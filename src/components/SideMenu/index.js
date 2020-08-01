import React from "react";
import SideMenuStyle from "./styled";
import { useHistory } from "react-router-dom";
import TabMenu from "../TabMenu";
let YellowIcon = "../../assets/yellow..svg";
export default function SideMenu() {
  const UserInfo = JSON.parse(localStorage.getItem("userAccount"));

  const ListMenuUser = [
    {
      key: 1,
      title: "My profile",
      src: "../../assets/person.png",
      link: "/profile",
    },
    {
      key: 2,
      title: "Transfer funds",
      src: "../../assets/transfer.png",
      link: "/transfer",
    },
    {
      key: 3,
      title: "Manage accounts",
      src: "../../assets/card.png",
      link: "/manage",
    },
    {
      key: 4,
      title: "Transactions history",
      src: "../../assets/time-outline.svg",
      link: "/history",
    },
    {
      key: 5,
      title: "Sign out",
      src: "../../assets/signout.png",
      link: "/signout",
    },
  ];

  const ListMenuAdmin = [
    {
      key: 1,
      title: " All customers ",
      src: "../../assets/all-cus.svg",
      link: "/all-customers",
    },
    {
      key: 2,
      title: "Pending requests",
      src: "../../assets/pen-req.svg",
      link: "/pending-requests",
    },
    {
      key: 3,
      title: "Configuration",
      src: "../../assets/all-cus.svg",
      link: "/configuration",
    },
    {
      key: 4,
      title: "Sign out",
      src: "../../assets/signout.png",
      link: "/signout",
    },
  ];
  let ListMenu = ListMenuUser;

  if (UserInfo.role.name === "Admin") {
    ListMenu = ListMenuAdmin;
    YellowIcon = "../../assets/yellow. ADMIN.svg";
  }
  let history = useHistory();
  const HandlerClick = (items) => {
    history.push(items.link);
  };
  const RenderMenu = () => {
    return ListMenu.map((items) => (
      <TabMenu
        onClick={() => {
          HandlerClick(items);
        }}
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
      <div className="listMenu">
        <RenderMenu ListMenu HandlerClick></RenderMenu>
      </div>
    </SideMenuStyle>
  );
}
