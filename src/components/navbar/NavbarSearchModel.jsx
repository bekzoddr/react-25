import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarSearchModel = ({ data, setSearchValue }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    setSearchValue("");
  };

  if (!data || clicked) return null;

  let searchItems = data.map((el) => (
    <div key={el.id} className="searching__items">
      <Link to={`/single/${el.id}`} onClick={handleClick}>
        <img src={el.thumbnail} width={50} height={50} alt="" />
        <h4>{el.title}</h4>
      </Link>
    </div>
  ));

  return (
    <div className="navbar__search__result">
      {!data.length ? (
        <h3 style={{ color: "black" }}>Malumot topilmadi</h3>
      ) : (
        searchItems
      )}
    </div>
  );
};

export default NavbarSearchModel;
