import "./navbar.scss";
import InputIcon from "@mui/icons-material/Input";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import InfoIcon from "@mui/icons-material/Info";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <div className="logo">
          <img src="/traffic.png" alt="" />
        </div>
        <div className="text">Traffic Department</div>
      </div>
      <div className="navs">
        <div className="items">
          <InfoIcon className="icons" />
          <div className="icon-name">About</div>
        </div>
        <div className="items">
          <AddIcCallIcon className="icons" />
          <div className="icon-name">Contact</div>
        </div>
        <div className="items">
          <AppRegistrationIcon className="icons" />
          <div className="icon-name">Register</div>
        </div>
        <div className="items">
          <InputIcon className="icons" />
          <div className="icon-name">Login</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
