import React, { Component } from 'react';
import Repo from './Repo'

class RepoList extends Component {
    render() {
        return (
                <div className="panel panel-default">
                    <div className="panel-heading col-lg-12">
                        <h3 className="panel-title">Repositories</h3>
                    </div>
                    <div className="panel-body">
                        {
                            this.props.userRepos.map(repo => {
                                return <Repo
                                    repo={repo}
                                    key={repo.id}
                                    {...this.props} />
                            })
                        }

                    </div>
                </div>

        );
    }
}

export default RepoList;
