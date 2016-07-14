var React = require('react');
var ReactDOM = require('react-dom');

export default class Content extends React.Component {

  render() {
    return (
      <div>
        <h1>Good job!</h1>
        <h2>Webpack-dev-server with --inline and --hot!</h2>
        <b>Congratulations</b>, you are now ready to implement your client side application!
      </div>
    );
  }
}

ReactDOM.render(<Content />, document.getElementById('react-content'));
