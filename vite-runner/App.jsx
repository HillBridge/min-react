import React from "./core/React.js";
// const App = React.createElement("div", { id: "app" }, "hi, min-react");

function App1() {
    return <div>hello, min-react</div>
}

const App = <div id='main'>hello, min-react <p>bridge</p></div>;

console.log('App1', App1)

export default App;
