var React = require('react');
var ReactDom = require('react-dom');
require = ('./index.css');

class app extends React.Component() {
    render() {
        return (
            <div>
                Hello World
            </div>)
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);