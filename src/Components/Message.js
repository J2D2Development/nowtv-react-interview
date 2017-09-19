import React from 'react';
import { formatTime } from '../Utilities/utilities.js'; 

export const Message = ({ messageInfo, mouseEnterHandler, mouseLeaveHandler }) => {
    return (
        <div className="message-wrapper" 
            onMouseEnter={() => mouseEnterHandler(messageInfo.userId)}
            onMouseLeave={mouseLeaveHandler}
        >
            <div className="message-body">
                {messageInfo.message}
            </div>
            <div className="message-timestamp">
                {formatTime(messageInfo.timestamp)}
            </div>
        </div>
    );
}

