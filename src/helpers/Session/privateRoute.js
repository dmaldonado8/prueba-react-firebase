import React from 'react';
import { withRouter } from 'react-router-dom';
import {withFirebase} from '../Firebase';

const privateRoute = (PrivateComponent, isLogged) => {
    class PrivateRoute extends React.Component {
        componentDidMount() {
            if(!isLogged) {
                
                this.props.history.push('/');
            }
        }

        cerrarSesion = () => {
            this.props.firebase.signOut();
            this.props.history.push('/');
        }

        render() {
            return (
                <div>
                    <button onClick={this.cerrarSesion}>Cerrar sesión</button>
                    <PrivateComponent {...this.props}></PrivateComponent>
                </div>
            )
        }
    }

    return withRouter(withFirebase(PrivateRoute));
}

export default privateRoute;