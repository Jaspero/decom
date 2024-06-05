import { w as writable } from "./index.js";
const CONFIG = {
  title: "Decom"
};
const META_SUFFIX = ` | ${CONFIG.title}`;
const meta = writable({ title: "Početna" });
export {
  META_SUFFIX as M,
  meta as m
};
