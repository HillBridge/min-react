// v1
// const dom = document.createElement("div");
// dom.id = "app";
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";
// dom.append(textNode);

// v2 react vdom ===> js object
// 引入虚拟dom来创建原来, 死数据  ==》 活数据
// const textEl = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };

// const el = {
//   type: "div",
//   props: {
//     id: "app",
//     children: [textEl],
//   },
// };

// const dom = document.createElement(el.type);
// dom.id = el.props.id;
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";
// dom.append(textNode);

// v3  动态创建元素

// const createTextElement = (text) => {
//   return {
//     type: "TEXT_ELEMENT",
//     props: {
//       nodeValue: text,
//       children: [],
//     },
//   };
// };

// const createElement = (type, props, ...children) => {
//   // ... children, 将一个或多个元素转为数据
//   return {
//     type,
//     props: {
//       ...props,
//       children,
//     },
//   };
// };

// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";
// dom.append(textNode);

// v4 抽离公共render函数

// function render(el, container) {
//   // 创建dom
//   const dom =
//     el.type === "TEXT_ELEMENT"
//       ? document.createTextNode("")
//       : document.createElement(el.type);

//   // 绑定属性 多个 id class
//   Object.keys(el.props).forEach((key) => {
//     if (key !== "children") {
//       dom[key] = el.props[key];
//     }
//   });

//   // 循环渲染 children
//   const children = el.props.children;
//   children.forEach((child) => {
//     render(child, dom);
//   });

//   container.append(dom);
// }
// const textEl = createTextElement("app");
// const App = createElement("div", { id: "app" }, "hi, min-react");

// render(App, document.querySelector("#root"));

import ReactDOM from "./core/ReactDom.js";
import App from "./App.js";

ReactDOM.createRoot(document.getElementById("root")).render(App);
