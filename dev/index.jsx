import NavBar from './components/NavBar.jsx';
import './style.css'

var React = require('react');
var ReactDOM = require('react-dom');

export default class Content extends React.Component {

  render() {
    return (
      <NavBar />
      // <MainBody />
      // <Footer />
    );
  }
}

ReactDOM.render(<Content />, document.getElementById('react-content'));
