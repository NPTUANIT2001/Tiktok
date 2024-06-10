import { HeaderOnly } from "~/component/layout";
import Profile from "~/pages/profile";
import Upload from "~/pages/upload";

const { default: Following } = require("~/pages/following");
const { default: Home } = require("~/pages/home");

const publicRoute = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/profile", component: Profile, layout: null },
];
const privateRoute = [];
export { publicRoute, privateRoute };
