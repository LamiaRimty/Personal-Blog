import "./footer.css"

function Footer(){

   const currentDate = new Date();
   const year = currentDate.getFullYear();
   return (
      <div className ="footer">
            <p className="footer-padding">@Copyright {year}</p>
       </div>
    
   );
}
export default Footer;



