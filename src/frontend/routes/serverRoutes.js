import Dashboard from "../components/Dashboard.jsx";
import Login from "../containers/Login.jsx";
import Register from "../containers/Register.jsx";

const routes = [
  {
    exact: true,
    path: "/",
    component: Dashboard,
  },
  {
    exact: true,
    path: "/login",
    component: Login,
  },
  {
    exact: true,
    path: "/register",
    component: Register,
  },
  /**{name: "NotFound", component: NotFound,} */
];

export default routes;
