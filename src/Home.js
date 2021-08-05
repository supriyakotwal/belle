import React from 'react';
import {connect} from 'react-redux';
import history from './history';
class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        if(!window.sessionStorage.getItem("isUserLoggedIn"))
            history.push('/');
        return(
            <React.Fragment>
                <center>
                    Welcome {window.sessionStorage.getItem("name")}<br/>
                <img className="justify-content-center mb-4" src="../../assets/bella=radiant.png" alt=""/>
                </center>
            </React.Fragment>
        );
    }
}


function mapStateToProps(state){
    return{
        
    }
}
export default connect(mapStateToProps)(Home);