import React from 'react';
import ReactDOM from 'react-dom/client'

//This is how we create elements using react
const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")]
    )
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//https://artifacthub-phx.oci.oraclecorp.com/api/npm/npmjs-remote