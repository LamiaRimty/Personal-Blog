import "./blog.css"
function Blog(props){

    return(
        <div className="blog">
            <h1 className="title">{props.title}</h1>
            <p className="time">{props.time}</p>
            <p className="qoute">{props.qoute}</p>
        </div>
    );

}
export default Blog;