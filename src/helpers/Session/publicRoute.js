import React from 'react';
import { withRouter } from 'react-router-dom';

const publicRoute = (PrivateComponent, isLogged) => {
    class PublicRoute extends React.Component {
        componentDidMount() {
            if(isLogged) {
                this.props.history.push('/main');
            }
        }

        render() {
            return (
                <div>
                    <PrivateComponent {...this.props}></PrivateComponent>
                </div>
            )
        }
    }

    return withRouter(PublicRoute);
}

export default publicRoute;