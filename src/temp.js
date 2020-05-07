var posts = [
    {
        title: 'Blog post #1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Royee Shemesh',
        image: 'https://via.placeholder.com/90'
    },
    {
        title: 'Blog post #2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Royee Shemesh',
        image: 'https://via.placeholder.com/90'
    },
    {
        title: 'Blog post #3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Royee Shemesh',
        image: 'https://via.placeholder.com/90'
    },
    {
        title: 'Blog post #4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Royee Shemesh',
        image: 'https://via.placeholder.com/90'
    },
    {
        title: 'Blog post #5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '2 days a go',
        author: 'Royee Shemesh',
        image: 'https://via.placeholder.com/90'
    },
];
function Post(props) {
    return (
        <div className="post">
            <label className="post-title">
                {props.title}
            </label>
            <p className="post-content">
                {props.content}
            </p>
            <img width="90" height="90" className="post-image" src={props.image}/>
            <label className="post-footer">
                Published {props.published} by {props.author}
            </label>
        </div>
    );
}
function Posts() {
    return posts.map(function(post) {
        return <Post
            title={post.title}
            content={post.content}
            image={post.image}
            published={post.published}
            author={post.author}
        />
    })
}
function Header() {
    return (
        <header>
            <ul className="nav-bar">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <a href="">Login</a>
        </header>
    );
}
function MainSection() {
    return (
        <section className="posts">
            <label className="title">This is my blog</label>
            <div id="posts-root" className="posts-list">
                <Posts/>
            </div>
        </section>
    );
}
function Sidebar() {
    return (
        <aside className="side-bar">
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
function App() {
    return (
        <div>
            <Header/>
            <MainSection/>
            <Sidebar/>
        </div>
    );
}