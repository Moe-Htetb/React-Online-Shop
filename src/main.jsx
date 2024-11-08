import { createRoot } from "react-dom/client";
// import { createElement } from "react";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import router from "./router/router";

const root = document.querySelector("#root");

createRoot(root).render(<RouterProvider router={router} />);

// const Categories = ["home ", "about", "men's clothing", "women's clothing"];

// const app = createElement(
//   "div",
//   { id: "categories-section", className: "p-5" },
//   createElement(
//     "p",
//     { className: "text-2xl text-gray-500 mb-5" },
//     "Product Categories"
//   ),
//   createElement(
//     "div",
//     null,
//     ...Categories.map((cate) =>
//       createElement(
//         "button",
//         { className: "me-2 border-black border px-4 py-2" },
//         cate
//       )
//     )
//   )
// );

// const title = document.createElement("p");
// title.innerText = "Product Categories";
// title.classList.add("text-2xl", "text-green-600", "mb-2");

// const CategoriesButton = (categoriesName) => {
//   const btn = document.createElement("button");
//   btn.innerText = categoriesName;
//   btn.classList.add("me-2", "border-black", "border", "px-4", "py-2");
//   return btn;
// };

// root.append(title);
// Categories.forEach((cate) => root.append(CategoriesButton(cate)));
