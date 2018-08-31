import React, { Component } from "react";

class UserList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.users !== this.props.users;
    }

    renderUsers = () => {
        const { users } = this.props;
        return users.map((user) => (
            <User key={user.id} user={user} />
        ))
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}