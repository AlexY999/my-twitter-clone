import React from 'react';
import './PostPage.css';

function PostPage() {
    return (
        <div className="post-page">
            <div className="post-header">
                <img className="avatar" src="https://via.placeholder.com/50" alt="User avatar" />
                <div className="user-info">
                    <h2 className="username">John Doe</h2>
                    <p className="handle">@johndoe</p>
                </div>
            </div>
            <div className="post-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img className="post-image" src="https://via.placeholder.com/500x300" alt="Post image" />
                <div className="post-actions">
                    <button className="like-button">Like</button>
                    <button className="retweet-button">Retweet</button>
                </div>
            </div>
        </div>
    );
}

export default PostPage;
