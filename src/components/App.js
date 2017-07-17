import React, {Component, PropTypes} from 'react';
import Header from './common/Header';

class App extends Component {
    render() {
        return (
            // <Header /> on the top of the SPA.

            // will load on every page and end up wrapping the components that we just created.
            // this.props.children will pass down the children that it receives at props. 
            // React Router will be passing child components as properties onto our app component and they will be composed on the page.
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    // we expect children, so it is required
    children: PropTypes.object.isRequired
};

export default App;