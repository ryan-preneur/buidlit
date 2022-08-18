import React from 'react';
import './sidebar.css';

export const Sidebar = () => {
    return (
        <div className='sideBar'>
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-house"></i></div><div className="w-75">Home</div></div>
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-fire"></i></div><div className="w-75">Trending</div></div>
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-folder-plus"></i></div><div className="w-75">Subscriptions</div></div>
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-tv"></i></div><div className="w-75">My Channel</div></div>
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-bookmark"></i></div><div className="w-75">Saved Videos</div></div>
            <hr />
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-clock"></i></div><div className="w-75">Watch Later</div></div>
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-thumbs-up"></i></div><div className="w-75">Liked Videos</div></div>
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-book-bookmark"></i></div><div className="w-75">Library</div></div>
            <hr />
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-gamepad"></i></div><div className="w-75">Gamming</div></div>
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-music"></i></div><div className="w-75">Music</div></div>
            <div className='sidebar__List'><div className='sidebarList__Icon'><i className="fa-solid fa-arrow-trend-up"></i></div><div className="w-75">Live</div></div>
        </div>
    )
}
