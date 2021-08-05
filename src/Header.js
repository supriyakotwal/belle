import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <a className="navbar-brand" href="/">
                <center>
                    <img className="justify-content-center mb-4" src="../../assets/Logo-Butterfly.svg" alt="" width="72" height="57"/>
                </center>
            </a>  
        );
    }
}

export default Header;