import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {withFirebase} from '../helpers/Firebase';

class Unprotected extends Component {
    componentDidMount() {
        console.log(this.props);
        
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(withFirebase(Unprotected))