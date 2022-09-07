import React from "react";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        Dropdown
      </a>
      <a href="/search" className="item">
        Search
      </a>
      <a href="/translate" className="item">
        Translate
      </a>
    </div>
  );
};
export default Header;
