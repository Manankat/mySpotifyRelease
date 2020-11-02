import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter} from 'react-pro-sidebar';
import SpotifyLogo from './image/LogoSpotify.png';
import { logOut } from '../redux/actions/logOut';
import './css/Sidebar.css';

import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


// Composant SideBar réutilisé sur toutes les pages, permettant la navigation sur le site
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect = (e) => {
        if (e === "logout") {
            this.props.history.push("login");
            this.props.logOut();
        } else {
            this.props.history.push(e);
        }
    }

    render () {
        return (
            <ProSidebar className="sidebar">
                <SidebarHeader className="title">
                    <img alt="" src={SpotifyLogo} className="logo"></img>
                    <h5>mySpotify<br/><br/>{this.props.userName}</h5>
                </SidebarHeader>
				<SidebarContent>
                    <Menu iconShape="round">
                        { /* Obligé d'appliquer un style= pour overwrite le cc du composant MenuItem */ }
                        {
                            (!this.props.userName ?
                            <MenuItem className="options" style={{fontSize: 25}} onClick={() => this.handleRedirect("login")}>Log in</MenuItem>
                            :
                            <>
                            <MenuItem className="options" style={{fontSize: 25}} onClick={() => this.handleRedirect("logout")}>Log out</MenuItem>
                            <MenuItem className="options" style={{fontSize: 25}} onClick={() => this.handleRedirect("userprofile")}>Your Account</MenuItem>
                            <MenuItem className="options" style={{fontSize: 25}} onClick={() => this.handleRedirect("searchsongs")}>Search a Song</MenuItem>
                            <MenuItem className="options" style={{fontSize: 25}} onClick={() => this.handleRedirect("searchartist")}>Search an Artist</MenuItem>
                            <MenuItem className="options" style={{fontSize: 25}} onClick={() => this.handleRedirect("searchalbum")}>Search an Album</MenuItem>
                            </>
                            )
                        }
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                </SidebarFooter>
			</ProSidebar>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    logOut: () => {
        dispatch(logOut());
    },
});

export default  connect(null, mapDispatchToProps) (withRouter(Sidebar));
