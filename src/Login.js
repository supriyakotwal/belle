import React from 'react';
import {connect} from 'react-redux';
import history from './history';
import {loginUser} from './actions/login';
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            message:'',
            errorMessages : '',
            loginDetails:""
        }
    }
    componentWillReceiveProps(nextProps) {
              
        if(nextProps.login && nextProps.login[0]) {
            if(nextProps.login[0].token) {
                this.setState({loginDetails:nextProps.login});
                this.authenticateUser();
            }
        }
        return null;
      }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    authenticateUser = () => {
        let loginDetails = this.state.loginDetails;
        if(loginDetails) {
            if(this.state.email === loginDetails.email && this.state.password === loginDetails.password) {
                window.sessionStorage.setItem("name", loginDetails.name);
                window.sessionStorage.setItem("isUserLoggedIn", true);
                history.push('/home');
                
            } else {
                window.sessionStorage.setItem("isUserLoggedIn", false);
                this.setState({errorMessages: 'Invalid Username or Password'});
            }
        }
    }
    login  = () => {
        if(this.state.email === '') {
            this.setState({errorMessages: 'Please enter Username'});
        } else if(this.state.password === '') {
            this.setState({errorMessages: 'Please enter Password'});
        } else {
            this.setState({errorMessages: ''});
            this.props.dispatch(loginUser());
        }
    };
    render() {
        return (
            <React.Fragment>
                <div className="login-container">
                </div>
                <div className="login"> <br/>                
                    <center>
                        <img className="justify-content-center mb-4" src="../../assets/Logo-Butterfly.svg" alt="" width="72" height="57"/>
                    </center>
                    <main className="form-signin">
                    
                        <h1 className="h3 mb-3 fw-normal">Login</h1>
    
                        <div className="form-floating">
                        <input type="email" name="email" required className="form-control" id="floatingInput" placeholder="name@example.com" onChange={this.handleChange}/>
                        <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" name="password" required className="form-control" id="floatingPassword" placeholder="Password" onChange={this.handleChange}/>
                        <label htmlFor="floatingPassword" error="invalid">Password</label>
                        </div>
    
                        <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                        </div>
                        <p className="mt-5 mb-3 errorMessages">{this.state.errorMessages}</p>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={this.login}>Login</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2020–2021</p>
                    
                    </main>
                </div>


            </React.Fragment>
        );
    }
}
function mapStateToProps(state){
    return{
        login:state.login
    }
}
export default connect(mapStateToProps)(Login);