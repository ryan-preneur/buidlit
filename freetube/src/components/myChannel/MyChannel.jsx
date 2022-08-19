import React, { useState } from 'react'
import './myChannel.css'
import { VideoListing } from '../videoListing/VideoListing';
export const MyChannel = () => {
    let [modalOpen, setModalOpen] = useState(false);

    return (
        <div className='myChannel'>
            <div className="coverImageContainer">
                <img src="https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629__340.jpg" alt="" className="coverImage" />
            </div>
            <div className="channelDetailsConatiner">
                <div className="profilePicConatiner">
                    <img src="https://i.pravatar.cc" alt="" className="profilePic channel" />
                    <div className='channelDetails'>
                        <div className="channelName">XYZ Channel</div>
                        <div className="channelSubscribers">100M Subscribers</div>
                    </div>
                </div>
                <div> <button className='addVideoButton' onClick={() => { setModalOpen(true) }}>+</button></div>

            </div>
            <div className='hrConatiner'><hr /></div>
            <div className="listingConatiner">
                <VideoListing myChannel={true} />
            </div>
            {modalOpen && (
                <>
                    <div className="overlay" onClick={() => { setModalOpen(false) }}></div>
                    <div className="addvideoFormConatiner">
                        <div className='modalHeader' >
                            <div className='font-bold'>Add Video</div>
                            <div className='cursor-pointer' onClick={() => { setModalOpen(false) }}><i className="fa-solid fa-xmark"></i></div>
                        </div>
                        <form action="" className="addVideoForm">
                            <div className="formitem">
                                <label>Upload Video</label>
                                <input type="file" className="uploadvideo" />
                            </div>
                            <div className="formitem">
                                <label>Video Title</label>
                                <input type="text" className="videoTitle" />
                            </div>
                            <div className="formitem">
                                <label>Video Description</label>
                                <textarea className="videoDescription" ></textarea>
                            </div>
                            <div className="submitButtonConatiner">
                                <button className="submitButton">Submit</button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}
