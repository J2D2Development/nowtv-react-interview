import React from 'react';
import { formatTime } from '../Utilities/utilities.js'; 

export const Message = ({ messageInfo, hoverHandler }) => {
    console.log('in message component:', messageInfo);
    return (
        <div className="message-wrapper">
            {messageInfo.message}
            {formatTime(messageInfo.timestamp)}
        </div>
    );
}

