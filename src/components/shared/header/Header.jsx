import NavBrand from "../../../assets/logo.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute w-full py-7">
      <div className="main_container">
        <div className="nav_wrapper flex items-center justify-between">
          <div className="nav_brand">
            <Link to={"#"}>
              <img src={NavBrand} alt="logo" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
