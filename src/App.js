import React from 'react';
import {connect} from 'react-redux';
import Routing from './Routing';
import './css/index.css';
import NavsideBar from './NavsideBar';
class App extends React.Component {

    render() {
        let navBar = null;
        if(window.sessionStorage.getItem("isUserLoggedIn") === "true"){
          navBar = <div className="sidebar"><NavsideBar/></div>;
        }
        return (
        <React.Fragment> 
            {navBar}
            <Routing/>
        </React.Fragment>
        );
    }
}

function mapStateToProps(state){
    return{
        
    }
}
export default connect()(App);