import React from "react";
import { sidebarData } from "../../configs/sidebarData";
import { footerData } from "../../configs/externalUrl";

const SideBar = () => {
  return (
    <div className="side__bar">
      <ul>
        {sidebarData.slice(0, 3).map((item, id) => {
          return (
            <li key={id}>
              <i className={item.iconClass}></i>
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
      <ul>
        {sidebarData.slice(3, 7).map((item, id) => {
          return (
            <li key={id}>
              <i className={item.iconClass}></i>
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
      <ul>
        <p className="side__bar__title">Subscriptions</p>
        {sidebarData.slice(7, 11).map((item, id) => {
          return (
            <li key={id}>
              <img
                src={item.imageClass}
                alt={item.imageClass}
                className="side__bar__image"
              />
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
      <ul>
        <p className="side__bar__title">Explore</p>
        {sidebarData.slice(12, 18).map((item, id) => {
          return (
            <li key={id}>
              <i className={item.iconClass}></i>
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
      <ul>
        <p className="side__bar__title">More from YouTube</p>
        {sidebarData.slice(18, 21).map((item, id) => {
          return (
            <li key={id}>
              <img
                src={item.imageClass}
                alt={item.imageClass}
                className="side__bar__image"
              />
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
      <ul>
        {sidebarData.slice(21, 25).map((item, id) => {
          return (
            <li key={id}>
              <i className={item.iconClass}></i>
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
      <ul className="side__bar__footer">
        {footerData.map((item, id) => {
          return <small key={id}>{item.name}</small>;
        })}
        <small>© 2023 Google LLC</small>
      </ul>
    </div>
  );
};

export default SideBar;
