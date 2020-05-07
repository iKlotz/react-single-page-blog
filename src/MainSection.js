import React from "react";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

function MainSection() {
    return (

        <section className="posts">
            <Sidebar/>
            <label className="title">This is my blog</label>
            <div id="posts-root" className="posts-list">
                <Posts/>
            </div>

        </section>
    );
}

export default MainSection;