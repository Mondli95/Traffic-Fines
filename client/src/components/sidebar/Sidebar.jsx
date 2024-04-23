import { sidebar } from "../../lib/sidebarItems";

import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      {sidebar.map((item) => (
        <div className="menu-items" key={item.id}>
          <div className="icon">
            <img src={item.icon} alt="" />
          </div>
          <div className="menu">
            <div className="menu-name">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
