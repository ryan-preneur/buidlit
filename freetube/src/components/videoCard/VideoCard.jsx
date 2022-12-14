import React from 'react'
import './videoCard.css'
import { Link } from "react-router-dom";

export const VideoCard = ({ source, title, desc, views, link, channel }) => {
    return (
        <div className='videoCard'>
            <div className="videoImageContainer">
                <img src={source} alt="" className="videoThumbnail" />
            </div>
            <div className="videoDetails">
                <div className="videoTitle"><Link to={link}> {title}</Link></div>
                <div className="videoDescription">{desc}</div>
                <div className="videoViews">{views} Views</div>
                <div className="saveForLater">
                    {!channel ? ('+') : (<i className="fa-solid fa-trash text-sm"></i>)}
                </div>
            </div>
        </div>
    )
}
