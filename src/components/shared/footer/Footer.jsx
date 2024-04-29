import { Link } from "react-router-dom";
import footerLogo from "../../../assets/footer-nav.svg";
import messageIcon from "../../../assets/message-icon.svg";
import sendIcon from "../../../assets/send-icon.svg";
const Footer = () => {
  return (
    <footer className="bg-[#111]">
      <div className="main_container">
        <div className="pt-[80px] pb-[30px]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-3 pb-6">
              <img src={footerLogo} alt="footer-logo" />
            </div>

            <div className="col-span-12 lg:col-span-3 pb-6">
              <h3 className="text-xl font-bold text-white pb-5">Partner</h3>
              <Link className="text-base font-normal text-white">
                Partner with us <br /> Investors
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-3 pb-6">
              <h3 className="text-xl font-bold text-white pb-5">Legal</h3>
              <Link className="text-base font-normal text-white">
                Terms of service <br /> Privacy Policy
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <h3 className="text-xl font-bold text-white pb-5">
                Contact Info
              </h3>
              <Link className="text-base font-normal text-white flex gap-4 pb-3">
                <img src={messageIcon} alt="icon" />
                support@beforecodellc.com
              </Link>
              <Link className="text-base font-normal text-white flex gap-4 pb-3">
                <img src={sendIcon} alt="icon" />
                Santa Clarita, CA
              </Link>
              <div className="nav_social">
                {/* <Link className="block">
                  <img src={LinkeDinIcon} alt="icon" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className="copyright py-[30px]">
          <p className="text-sm font-normal text-white text-center">
            © Before Code, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer