import React from 'react';
import {withFirebase} from '../Firebase';
import AuthUserContext from './context';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                authUser: null,
                load: false
            };
        }
    
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(user => {
                if(user) {
                    this.setState({authUser: user, load: true});
                } else {
                    this.setState({authUser: null, load: true});
                }
            });
        }
    
        componentWillUnmout() {
            this.listener();
        }

        render() {
            return (
                <div>
                    {this.state.load ? 
                        <AuthUserContext.Provider value={this.state.authUser}>
                            <Component {...this.props} authUser={this.state.authUser} load={this.state.load}/>
                        </AuthUserContext.Provider>
                    :
                        <h1>Cargando</h1>    
                }
                </div>
            );
        }
    }
    return withFirebase(WithAuthentication);
};

export default withAuthentication;