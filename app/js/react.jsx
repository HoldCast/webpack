import React from "react";
class Hello extends React.Component{
    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div>
                <h1>Hello, React!</h1>
            </div>
        )
    }
}

export default Hello;
