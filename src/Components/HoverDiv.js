import React from 'react';

export const HoverDiv = ({email, avatar}) => {
    return (
        <div className="member-details">
            {avatar ? <img src={avatar} alt={email} /> : ''}
            <div className="email">{email}</div>
        </div>
    )
}