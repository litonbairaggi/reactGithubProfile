import React, { Component } from 'react';
import RepoList from './RepoList';
import './Profile.css'

class Profile extends Component {
    render() {
        return (
    <div className="">
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-5">
                        <img src={this.props.userData.avatar_url} className="thumbnail" />
                        <a href={this.props.userData.html_url} target="blank" className="btn btn-primary">View Profile</a>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <span className="label label-success">{this.props.userData.public_repos} Public Repos</span>
                                <span className="label label-primary">{this.props.userData.public_gists} Public Gist</span>
                                <span className="label label-default">{this.props.userData.followers} Followers</span>
                                <span className="label label-info">{this.props.userData.following} Following</span>
                            </div>
                        </div>
                        <hr />
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Name: {this.props.userData.name}</strong></li>
                                <li className="list-group-item"><strong>Username: {this.props.userData.login}</strong></li>
                                <li className="list-group-item"><strong>Location: {this.props.userData.location}</strong></li>
                                <li className="list-group-item"><strong>Email: {this.props.userData.email}</strong></li>
                            </ul>

                    </div>
                </div>
                <hr/>
                <RepoList userRepos = {this.props.userRepos} />
            </div>
        </div>
        );
    }
}

export default Profile;