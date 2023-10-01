import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  // eslint-disable-next-line
  const [isScrolled, setIsScrolled] = useState();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon"></Notifications>
          <img
            src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/370385981_1949433932122593_4136916102376433646_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Nq-ZDsy2GQAAX-QqUNT&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDWqATO6ozL-ygBoPPhjU1jI1_cU5SbQhyelOA8jrRa_g&oe=651DF5AB"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
