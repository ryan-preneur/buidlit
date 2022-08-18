import React from 'react'
import './videoDisplay.css'

export const VideoDisplay = () => {
    return (
        <div className='videoDisplay'>
            <video width="1000px"
                controls="controls">

                <source src="/vid.mp4"
                    type="video/mp4" />
            </video>
            <div className='videoPlayDetails'>
                <div className='videoTitleContainer'><div className="videoTitle">Make a FreeTube Clone</div><div className="like"><i className="fa-solid fa-thumbs-up videoLike"></i> &nbsp; Like </div></div>
                <div className="videoDescription">First D app for users to freely add and interact with videos on the net.</div>
                <hr />
                <div className="channelDetailsContainer">
                    <div className="channelContainer">
                        <div className="channelImage">
                            <img src="https://i.pravatar.cc/300" alt="" className="channelImage" />
                        </div>
                        <div className='channelDetails'>
                            <div className="channelName">Name Of Channel</div>
                            <div className="channelSubscribers">100M Subscribers</div>
                        </div>
                    </div>
                    <div> <button className='subscribeButton'>Subscribe</button></div>
                </div>
                <hr />
                <div className='commentSection'>
                    <div className="commentsHeading">Comments</div>
                    <div className="commentContainer">
                        <div className="profilePic">
                            <img src="https://i.pravatar.cc" alt="" className="profilePic" />
                        </div>
                        <div className="commentDetails">
                            <div className="userName">XYZ User</div>
                            <div className="comment">Hi amazing Video</div>
                        </div>
                    </div>
                    <div className="commentContainer">
                        <div className="profilePic">
                            <img src="https://i.pravatar.cc" alt="" className="profilePic" />
                        </div>
                        <div className="commentDetails">
                            <div className="userName">XYZ User</div>
                            <div className="comment">Hi amazing Video</div>
                        </div>
                    </div>
                    <div className="commentContainer">
                        <div className="profilePic">
                            <img src="https://i.pravatar.cc" alt="" className="profilePic" />
                        </div>
                        <div className="commentDetails">
                            <div className="userName">XYZ User</div>
                            <div className="comment">Hi amazing Video</div>
                        </div>
                    </div>
                    <div className="commentContainer">
                        <div className="profilePic">
                            <img src="https://i.pravatar.cc" alt="" className="profilePic" />
                        </div>
                        <div className="commentDetails">
                            <div className="userName">XYZ User</div>
                            <div className="comment">Hi amazing Video</div>
                        </div>
                    </div>
                    <div className="addCommentContainer">
                        <div className="addComment">+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
