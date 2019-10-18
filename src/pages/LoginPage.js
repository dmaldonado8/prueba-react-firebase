import React, {Component} from  'react';
import {withFirebase} from '../helpers/Firebase';
import { withRouter } from 'react-router-dom';

/* 
* Existe solo una clase (FormLogin) en este componente
* esto debido a que es el único componenten que tendrá un manejador de estado
*/

function LoginPage () {
    return(
        <div className="login--body">
            <div className="form--container">
                <div className="line vertical top"></div>
                <div className="form--header">
                    <div className="form--title">
                        <div>
                            <h1>Bloggie</h1>
                            <small>Blog personal.</small>
                        </div>
                    </div>
                    <div className="form--data--container">
                        <div className="form--data">
                            <SignInForm></SignInForm>
                        </div>
                    </div>
                </div>
                <div className="line vertical bottom"></div>
            </div>  
        </div>
    )
}

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            send: false
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        this.props.firebase.login(email, password);
        this.props.firebase.auth.onAuthStateChanged(user => {
            if(user) {
                this.props.history.push('/main');
            }
        });
    }
    
    render() {
        /* Validador de campos */
        const isInvalid = this.state.email === '' || this.state.password === '';
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="input--text--container">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        id="txt_email" 
                        name="txt_email" 
                        value={this.state.email}
                        onChange={(event) => this.setState({email: event.target.value})}>
                    </input>
                </div>
                <div className="input--text--container">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        id="txt_password" 
                        name="txt_password" 
                        value={this.state.password}
                        onChange={(event) => this.setState({password: event.target.value})}>
                    </input>
                </div>
                <div className="d-flex justify-content-end">
                    <input type="submit" value="Ingresar" className="btn primary" disabled={isInvalid}></input>
                </div>
            </form>
        )
    }
}

const SignInForm = withRouter(withFirebase(FormLogin));

export {LoginPage};