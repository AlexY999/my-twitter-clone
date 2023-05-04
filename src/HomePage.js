import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './HomePage.css';
import avatarImg from './assets/ProfileImg.png';

const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('hidden');
}

const HomePage = () => {
    return (
        <div className="container">
            <header>
                <nav>
                    <ul>
                        <Link to="/">
                            <FiTwitter className="logo" />
                        </Link>
                        <input type="text" placeholder="Search Twitter" />
                        <Link to="/profile">
                            <img
                                src={avatarImg}
                                alt="Profile"
                            />
                        </Link>
                        <button onClick={toggleSidebar}>Toggle Sidebar</button>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="sidebar">
                    <ul>
                        <li>
                            <Link to="/">
                                <span className="icon"></span>
                                <span className="label">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/explore">
                                <span className="icon"></span>
                                <span className="label">Explore</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/notifications">
                                <span className="icon"></span>
                                <span className="label">Notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/messages">
                                <span className="icon"></span>
                                <span className="label">Messages</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/bookmarks">
                                <span className="icon"></span>
                                <span className="label">Bookmarks</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/lists">
                                <span className="icon"></span>
                                <span className="label">Lists</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <span className="icon"></span>
                                <span className="label">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <button>Tweet</button>
                        </li>
                    </ul>
                </div>
                <div className="feed">
                    <div className="new-tweet">
                        <img
                            src={avatarImg}
                            alt="Profile"
                        />
                        <input type="text" placeholder="What's happening?" />
                    </div>
                    <div className="tweet">
                        <img
                            src={avatarImg}
                            alt="Profile"
                        />
                        <div className="tweet-content">
                            <div className="user-info">
                                <span className="name">John Doe</span>
                                <span className="username">@johndoe</span>
                                <span className="dot">&middot;</span>
                                <span className="timestamp">3h</span>
                            </div>
                            <div className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                pharetra urna ac diam euismod interdum. Suspendisse potenti.
                                Praesent sit amet urna sed lacus luct
                            </div>
                        </div>
                    </div>
                    <div className="tweet">
                        <img
                            src={avatarImg}
                            alt="Profile"
                        />
                        <div className="tweet-content">
                            <div className="user-info">
                                <span className="name">Jane Smith</span>
                                <span className="username">@janesmith</span>
                                <span className="dot">&middot;</span>
                                <span className="timestamp">6h</span>
                            </div>
                            <div className="text">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque
                                ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi
                                nesciunt.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;