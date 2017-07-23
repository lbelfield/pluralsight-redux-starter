import React, {Component, PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (
            // <Header /> on the top of the SPA.

            // will load on every page and end up wrapping the components that we just created.
            // this.props.children will pass down the children that it receives at props. 
            // React Router will be passing child components as properties onto our app component and they will be composed on the page.
            <div className="container-fluid">
                <Header 
                    loading={this.props.loading}
                />
                {this.props.children}
            </div>
        );
    }
}

// propTypes is a static property, so must be defined below our class in a static call.
// explicit about our props
App.propTypes = {
    // we expect children, so it is required
    children: React.PropTypes.object.isRequired,
    loading: React.PropTypes.bool.isRequired
};

// loading is a boolean passed down to header, to see if there are any ajax calls currently happening
function mapStateToProps(state, ownProps) {
    return {
      loading: state.ajaxCallsInProgress > 0  
    };
}

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(App);