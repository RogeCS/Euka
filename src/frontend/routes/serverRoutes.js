import Dashboard from "../containers/Dashboard.jsx";
import Login from "../containers/Login.jsx";
import Register from "../containers/Register.jsx";

const serverRoutes = (isLogged) => {
  return [
    {
      path: "/",
      exact: true,
      component: isLogged ? Dashboard : Login,
    },
    {
      path: "/login",
      exact: true,
      component: Login,
    },
    {
      path: "/register",
      exact: true,
      component: Register,
    },
    /**{name: "NotFound", component: NotFound,} */
  ];
};

export default serverRoutes;
