import React from "react";
import SidebarDropdown from "./SidebarDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto min-vh-100 bg-dark">
          <ul>
            <li>
              <SidebarDropdown />
            </li>
            <li>
              <SidebarDropdown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
