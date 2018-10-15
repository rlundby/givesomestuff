import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {username: '', email: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    }

    handleSignInSubmit(event) {
       event.preventDefault();
       if(this.state.username === 'guest' && this.state.password === '123abc4') {
           sessionStorage.setItem('auth', 'yes');
           this.setState({username: '', password: ''})
       } else {
           alert('Please check the entered information')
       }
    }


    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        let auth = sessionStorage.getItem('auth');
        if (auth) {
            return <Redirect to="/"/>
        }
        return (
            <div class="container login">
                <div class="col-md-6 card">
                    <h1>Logga in för att fortsätta.</h1>
                    <form className='tab-pane' id='signin'>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username"
                                   onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password"
                                   onChange={this.handleChange}/>
                        </div>
                        <button type="button" onClick={this.handleSignInSubmit} className='btn btn-primary'>Sign
                            In
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;