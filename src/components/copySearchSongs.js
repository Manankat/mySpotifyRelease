import Sidebar from "./Sidebar";
import './css/SearchSongs.css';
import SearchIcon from './image/searchIcon.png'
import { searchSongs } from '../redux/services/searchSongs';

import {connect} from 'react-redux';
import React from 'react';

class SearchSongs extends React.Component {
    constructor(props) {
        super(props);
        this._handleKeyDown = this._handleKeyDown.bind(this);
    }

    componentDidMount = () => {
        if (!this.props.userProfile) {
            this.props.history.push("login");
            alert("To acces our fonctionnalities, you have to login")
        }
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.searchSongs(this.props.token, document.getElementsByClassName("input-field")[0].value);
        }
    }

    songLenght = (songMs) => {
        var minutes = Math.floor(songMs / 60000);
        var seconds = ((songMs % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

	render () {
		return (
            <div className="container">
                <div className="fixed font">
                    <Sidebar history={this.props.history} userName={this.props.userProfile}/>
                </div>
                <div className="input-section">
                    <div className="input-container">
                        <img alt="" src={SearchIcon} className="icon"></img>
                        <input name="artist" type="text" className="input-field" placeholder="Type the artist name" onKeyDown={this._handleKeyDown} />
                    </div>                    
                {
                    (this.props.songs.researchSongs ?
                    <>
                    <div className="data-container">
                        <table className="table-song">
                            <tbody>
                                <tr>
                                    <td>Title :</td>
                                    <td>{this.props.songs.researchSongs.name}</td>
                                </tr>
                                <tr>
                                    <td>Artist :</td>
                                    <td>{this.props.songs.researchSongs.artists[0].name}</td>
                                </tr>
                                <tr>
                                    <td>Popularity :</td>
                                    <td>{this.props.songs.researchSongs.popularity}</td>
                                </tr>
                                <tr>
                                    <td>Lenght :</td>
                                    <td>{this.songLenght(this.props.songs.researchSongs.duration_ms)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="image-container">
                        <img alt="" src={this.props.songs.researchSongs.album.images[1].url} style={{height: "320px", width: "320px"}}></img>
                    </div>
                    </>
                    : (this.props.songs.loading ? <></>
                    : ""))
                }                
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => ({
    userProfile: state.profileReducer.userProfile.display_name,
    token: state.userIdReducer.userID,
    songs: state.songsReducer,
})

const mapDispatchToProps = dispatch => ({
    searchSongs: (token, search) => {
        dispatch(searchSongs(token, search));
    }
});

export default connect(mapStateToProps, mapDispatchToProps) (SearchSongs);
