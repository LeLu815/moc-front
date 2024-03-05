import { NavLink } from "react-router-dom";

import classes from "./CateNav.module.css";

const CateNav = ({ id, name }) => {
  return (
    <NavLink
      to={`/posts/list/${id}`}
      className={({ isActive }) =>
        isActive ? `${classes.nav_btn} ${classes.active}` : `${classes.nav_btn}`
      }
    >
      {name}
    </NavLink>
  );
};

export default CateNav;
