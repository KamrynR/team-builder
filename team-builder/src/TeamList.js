import React from 'react';
import './TeamList.css';

const TeamList = props => {
    console.log(props.list);
    return (
        <div className='TL'>
            {props.list.map((e, i) => (
                <div className='users' key={i}>
                    <h1>User {i + 1}</h1>
                    <p>Username: {e.user.username}</p>
                    <p>Email: {e.user.email}</p>
                    <p>Role: {e.user.role}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamList;