import { useSelector, useDispatch } from "react-redux";
import { authenticateActions } from "../store/auth";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.authenticate.isAuthenticated
  );

  const clickLogoutHandler = () => {
    dispatch(authenticateActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          {isAuthenticated && (
            <li>
              <button onClick={clickLogoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
