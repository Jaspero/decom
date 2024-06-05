import { b as blogData } from "../../../../chunks/blog.js";
const load = async () => {
  const { authors } = await blogData();
  return {
    authors
  };
};
export {
  load
};
