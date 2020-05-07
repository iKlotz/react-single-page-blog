import React from "react";

function Sidebar() {
    return (
        <aside className="right">
            <label className="title">Latest</label>
            <ul className="side-bar-list">
                <li>
                    <span>Blog post #1 </span><a href="">here</a>
                </li>
                <li>
                    <span>Blog post #2 </span><a href="">here</a>
                </li>
                <li>
                    <span>Blog post #3 </span><a href="">here</a>
                </li>
            </ul>
            <hr/>
            <label className="title">Popular</label>
            <ul className="side-bar-list">
                <li>
                    <span>Blog post #1 </span><a href="">here</a>
                </li>
                <li>
                    <span>Blog post #2 </span><a href="">here</a>
                </li>
                <li>
                    <span>Blog post #3 </span><a href="">here</a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;