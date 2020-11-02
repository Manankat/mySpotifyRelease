import Sidebar from "./Sidebar";
import './css/Login.css';
import LogoWithText from './image/LogoSpotify-withText.jpg';
import { setUserID } from '../redux/actions/setUserID';
import { getUserProfile } from '../redux/services/userProfile';

import React from 'react';
import {connect} from 'react-redux';


class Login extends React.Component {
    componentDidMount() {
        var access_token = window.location.hash.split('access_token=')[1];
        var error_code = window.location.search.split('error=')[1];
        if (access_token) {
            access_token = access_token.split('&')[0];
            this.props.setUserID(access_token);
            this.props.getUserProfile(access_token);
        } else if (error_code) {
            alert("Erreur");
        }
    }

	render () {
		return (
            <div className="container">
                <div className="fixed font">
                    <Sidebar history={this.props.history} userName={this.props.userProfile}/>
                </div>
                    {
                        (!this.props.userProfile ? 
                        <div className="font flex">
                            <p>Pour continuer, veuillez vous connecter avec</p>
                            <a href="https://accounts.spotify.com/fr/authorize?client_id=0efedfaefd994cc198d34c4a8a3674c8&response_type=token&redirect_uri=http:%2F%2Flocalhost:3000%2Flogin&scope=user-read-private%20user-read-email">
                                <img alt="Qries" src={LogoWithText} className="clickableImage"></img>
                            </a>
                            <p>en cliquant sur l'image</p>
                        </div>
                        :  
                        <div className="font flex">
                            <p>Bienvenue sur mySpotify {this.props.userProfile}</p>
                        </div>)
                    }
            </div>
		);
	}
}

const mapStateToProps = state => ({
    userProfile: state.profileReducer.userProfile.display_name,
})

const mapDispatchToProps = dispatch => ({
    setUserID: (e) => {
        dispatch(setUserID(e));
    },
    getUserProfile: (e) => {
        dispatch(getUserProfile(e));
    }
});

export default connect(mapStateToProps, mapDispatchToProps) (Login);