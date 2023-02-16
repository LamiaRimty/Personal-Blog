import "./Blog.css"
function Blog(props){

    return(
        <div className="blog">
            <h1 className="title">{props.title}</h1>
            <h3 className="time">{props.time}</h3>
            <h2 className="qoute">{props.qoute}</h2>
        </div>
    );

}
export default Blog;