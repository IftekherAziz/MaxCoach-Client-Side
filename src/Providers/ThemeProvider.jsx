import { useContext } from "react";
import { AuthContext } from "./AuthProviders";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(AuthContext);
  // console.log(theme);
  return <div data-theme={theme ? "corporate" : "dark"}>{children}</div>;
};

export default ThemeProvider;
