import BlogFile from "../blogFile/BlogFile";
import "./blogs.css"
function Blogs(props){

    return(
        <div className="blogs">
            <h1 className="title">{props.title}</h1>
            <p className="time">{props.time}</p>
            <p className="qoute">{props.qoute}</p>
        </div>
    );

}
export default Blogs;