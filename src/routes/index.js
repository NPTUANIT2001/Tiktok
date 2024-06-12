import { HeaderOnly } from "~/component/layout";
import Profile from "~/pages/profile";
import Upload from "~/pages/upload";

const { default: Following } = require("~/pages/following");
const { default: Home } = require("~/pages/home");

const publicRoute = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/@:nickname", component: Profile },
];
const privateRoute = [];
export { publicRoute, privateRoute };
