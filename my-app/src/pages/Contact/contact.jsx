import "./contact.css"
function Contact(){
    return(
        <div className="contact">
          <h1>Contact Me</h1> 
          <p>Get In Touch.If you love reading as much I do.If you love reading as much I do? Let's talk about coding & some books!.
            My Email: rimtycse@email.com</p>
         
         <form className="form">
            <label >
                <span>Your Email:</span>
                <input type="name" name="name" placeholder="Your first name" required/>
            </label>

            <label>
                <span>Your Email:</span>
                <input type="email" name="email" placeholder="Your email address" required/>
            </label>

            <label>
                <span>Your Massage:</span>
                <textarea id="message" type="message" name="message" placeholder="Your message" required rows="5" cols="6"></textarea>
            </label>

                <button className="contactBtn" type="submit">Submit</button>
         </form>
        </div> 
    );
}
export default Contact;