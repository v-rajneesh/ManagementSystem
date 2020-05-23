import Home from "../home/Home";
import Login from "../Login/login";

const publicRoutes = [
  { path: "/home", key: 1, comp: Home },
  { path: "/login", key: 2, comp: Login },
];

export const privateRoutes = [
  { path: "/home", key: 1, comp: Home },
  { path: "/logout", key: 2, comp: Home },
];

export default publicRoutes;
