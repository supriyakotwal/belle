import React from 'react';
import history from './history';

class NavsideBar extends React.Component {
    logout = () => {
        window.sessionStorage.removeItem('isUserLoggedIn');
        window.sessionStorage.removeItem('name');
        window.sessionStorage.removeItem('token');
        history.push('/');
      }
    render () {
        return (
            
            <div className="navSidebar">
            <ul>
                <li className="navsidebar-image">
                    <a className="navbar-brand" href="/">
                        <img className="justify-content-center mb-4" src="../../assets/Logo-Butterfly.svg" alt="" width="72" height="57"/>
                    </a> 
                </li>
                <li className="navsidebar-item">
                <a className="navbar-brand" href="/home">Home</a>
                </li>
                <li className="navsidebar-item">
                <a className="navbar-brand" href="/products">Products</a>
                </li>
                <li className="navsidebar-item">
                <a href="/" onClick={this.logout}>Logout</a>
                </li>
            </ul>
            </div>
        )
    }

}
export default NavsideBar;