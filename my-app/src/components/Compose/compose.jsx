import "./compose.css"
function Compose(){
    return(
        <div className="compose">
            <form className="composeForm">
               <div className="composeFormGroup">
                    <label>Title</label>
                    <input className="composeBlog" id="title" type="text" placeholder="Title" autoFocus={true}/>
                </div> 

                <div className="composeFormGroup"> 
                    <label>Description</label>
                    <textarea className="composeBlog" id="description" type="text" placeholder="Write a blog..."></textarea>
                </div> 

                <button className="composeBlogBtn"  type="submit" autocomplete="off">Publish</button>

            </form>
        </div>
    );
}
export default Compose;