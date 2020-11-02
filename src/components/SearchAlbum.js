import Sidebar from "./Sidebar";
import './css/SearchAlbum.css';
import SearchIcon from './image/searchIcon.png'
import { searchAlbum } from '../redux/services/searchAlbum';

import {connect} from 'react-redux';
import React from 'react';

class SearchAlbum extends React.Component {
    constructor(props) {
        super(props);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.dateFormat = this.dateFormat.bind(this);
    }

    componentDidMount = () => {
        if (!this.props.userProfile) {
            this.props.history.push("login");
            alert("To acces our fonctionnalities, you have to login")
        }
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.searchAlbum(this.props.token, document.getElementsByClassName("input-album")[0].value);
        }
    }

    dateFormat = (inputDate) => {
        console.log(inputDate);
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        }
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
                        <input type="text" className="input-album" placeholder="Type the album name" onKeyDown={this._handleKeyDown} />
                    </div>
                {
                    (this.props.album.researchAlbum ?
                    <>
                    <div className="data-container">
                        <table className="table-song">
                            <tbody>
                                <tr>
                                    <td>Name :</td>
                                    <td>{this.props.album.researchAlbum.name}</td>
                                </tr>
                                <tr>
                                    <td>Artist :</td>
                                    <td>{this.props.album.researchAlbum.artists[0].name}</td>
                                </tr>
                                <tr>
                                    <td>Number of Tracks :</td>
                                    <td>{this.props.album.researchAlbum.total_tracks}</td>
                                </tr>
                                <tr>
                                    <td>Release date :</td>
                                    <td>{this.dateFormat(this.props.album.researchAlbum.release_date)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="image-container">
                    <img alt="" src={this.props.album.researchAlbum.images[1].url} style={{height: "320px", width: "320px"}}></img>
                    </div>
                    </>
                    : (this.props.album.loading ? <></>
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
    album: state.albumReducer,
})

const mapDispatchToProps = dispatch => ({
    searchAlbum: (token, search) => {
        dispatch(searchAlbum(token, search));
    }
});

export default connect(mapStateToProps, mapDispatchToProps) (SearchAlbum);
