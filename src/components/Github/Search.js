import React, { Component } from 'react';

class Search extends Component {

    onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username){
            alert('Please enter a username');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }

    render() {
        return (
            <div className="row">
                <div className="col md-12 ">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group col-lg-3 d-flex justify-content-center ">
                            <input type="text" ref="username" className="form-control " placeholder="Github username" />
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Search;
