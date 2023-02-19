import "./singleBlog.css";

function SingleBlog(){
    return(
        <div className="singleBlog">
           <h1 className="singleBlogTitle">My journey to Web Development</h1>
            <p className="singleBlogTime">December 1,2022 .  🥐 10 min to read</p>

            <div className="blogTranslation">
                <p className="translatedLanguage">
                    <span>
                        <span >Translates in: </span>
                        <a href="/fr/my-journey-to-Web-development/">Français</a>
                        <a href="/es/my-journey-to-Web-development/">Español</a>
                        <a href="/zh-hans/my-journey-to-Web-development/">简体中文</a>
                        <a href="/ja/my-journey-to-Web-development/">日本語</a>

                    </span>
                </p>
            </div>
            <p className="singleBlogQoute">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock,a Latin professor
                at Hampden-Sydney College in Virginia,looked up one of the more 
                obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections
                1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"(The Extremes 
                of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.The first
                line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",comes from a line
                in section 1.10.32.

             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <div className="singleBlogEdit">
                <i className="singleBlogIcon fas fa-edit"></i>
                <i class="singleBlogIcon fa-regular fa-comments"></i>
            </div>
        
            <div className="singleBlogInfo">
                    <span className="singleBlogAuthor">
                        Author: <a href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/">Lamia Jabin Rimty</a>
                    </span>
            </div>

        </div>
    );
}

export default SingleBlog;