
/** @jsx CReact.createElement */
import CReact from "./core/React.js";
// const App = React.createElement("div", { id: "app" }, "hi, min-react");

function App1() {
    return <div>hello, min-react</div>
}

console.log('App1', App1)

const App = <div id='main'>hello, min-react <p>bridge</p></div>;



export default App;
