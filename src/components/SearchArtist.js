import Sidebar from "./Sidebar";
import './css/SearchArtist.css';
import SearchIcon from './image/searchIcon.png'
import { searchArtist } from '../redux/services/searchArtist';

import {connect} from 'react-redux';
import React from 'react';

class SearchArtist extends React.Component {
    constructor(props) {
        super(props);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.displayAllGenres = this.displayAllGenres.bind(this);
    }

    componentDidMount = () => {
        if (!this.props.userProfile) {
            this.props.history.push("login");
            alert("To acces our fonctionnalities, you have to login")
        }
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.searchArtist(this.props.token, document.getElementsByClassName("input-artist")[0].value);
        }
    }

    displayAllGenres = (genresArray) => {
        var allgenres = "";
        var i = 0;
        while (genresArray[i]) {
            allgenres += genresArray[i];
            i++;
            if (genresArray[i])
                allgenres += ", "
        }
        return allgenres;
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
                        <input type="text" className="input-artist" placeholder="Type the artist name" onKeyDown={this._handleKeyDown} />
                    </div>                    
                    {
                    (this.props.artist.researchArtist ?
                    <>
                    <div className="data-container">
                        <table className="table-song">
                            <tbody>
                                <tr>
                                    <td>Name :</td>
                                    <td>{this.props.artist.researchArtist.name}</td>
                                </tr>
                                <tr>
                                    <td>Popularity :</td>
                                    <td>{this.props.artist.researchArtist.popularity}</td>
                                </tr>
                                <tr>
                                    <td>Followers :</td>
                                    <td>{this.props.artist.researchArtist.followers.total}</td>
                                </tr>
                                <tr>
                                    <td>Genres :</td>
                                    <td>{this.displayAllGenres(this.props.artist.researchArtist.genres)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="image-container">
                        <img alt="" src={this.props.artist.researchArtist.images[1].url} style={{height: "320px", width: "320px"}}></img>
                    </div>
                    </>
                    : (this.props.artist.loading ? <></>
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
    artist: state.artistReducer,
})

const mapDispatchToProps = dispatch => ({
    searchArtist: (token, search) => {
        dispatch(searchArtist(token, search));
    }
});

export default connect(mapStateToProps, mapDispatchToProps) (SearchArtist);
