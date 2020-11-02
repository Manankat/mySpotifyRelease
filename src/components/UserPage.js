import Sidebar from "./Sidebar";
import './css/UserPage.css'

import {connect} from 'react-redux';
import React from 'react';

class UserPage extends React.Component {
    constructor(props) {
        super(props)
        this.handleComponentMounted = this.handleComponentMounted.bind(this);
    }

    handleComponentMounted = () => {
        if (!this.props.userProfile) {
            this.props.history.push("login");
            alert("To acces our fonctionnalities, you have to login")
        }
    }

	render () {
		return (
            <>
            {
                (this.props.userProfile ? 
                <div className="container">
                    <div className="fixed font">
                        <Sidebar history={this.props.history} userName={this.props.userProfile.display_name}/>
                    </div>
                    <div className="font flex">
                        <img alt="" src={this.props.userProfile.images[0].url} className="rounded"></img>
                        <br/><br/>
                        <table className="table-user">
                            <tbody>
                                <tr>
                                    <td>User :</td>
                                    <td>{this.props.userProfile.display_name}</td>
                                </tr>
                                <tr>
                                    <td>Country :</td>
                                    <td>{this.props.userProfile.country}</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>{this.props.userProfile.email}</td>
                                </tr>
                                <tr>
                                    <td>Followers :</td>
                                    <td>{this.props.userProfile.followers.total}</td>
                                </tr>                                
                            </tbody>
                        </table>
                    </div>
                </div>
                : this.handleComponentMounted())
            }
            </>
		);
	}
}

const mapStateToProps = state => ({
    userProfile: state.profileReducer.userProfile,
})


export default connect(mapStateToProps, null)  (UserPage);
