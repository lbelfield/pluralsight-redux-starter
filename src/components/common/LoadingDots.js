import React, {Component} from 'react';

class LoadingDots extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            frame: 1
        };
    }

    // LIFECYCLE HOOK !!!!!!!!!
    // When: runs immediately after render. By the time this function's called, the component's DOM exists.
    // Why: Good spot for using third party components and making AJAX requests, since you now know the component is rendered in the DOM. 
    // The why is important here - the loading will be used when our asynchronous thunks are made, eg loadCourses or loadAuthors
    // So using componentDidMount() (which is used for making AJAX requests because we know the component is in the DOM) makes sense. 
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }

    // LIFECYCLE HOOK !!!!!!!! 
    // When: This function runs just before component is unmounted from the DOM. 
    // Why: Great place to clean up by destroying any related resources or DOM elements that were created when the component was mounted.
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render () {
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';

        while(dots > 0) {
            text += '.';
            dots--;
        }

        return <span {...this.props}>{text}&nbsp;</span>;
    }
}

// explicit about props
// configurable props for Container Component to decide: 
    // interval: how regularly they occur 
    // dots: how many dots
LoadingDots.propTypes = {
    interval: React.PropTypes.number, 
    dots: React.PropTypes.number
};

// default in case Container doesn't pass dots in.
LoadingDots.defaultProps = {
    interval: 300, 
    dots: 3
};

export default LoadingDots; 