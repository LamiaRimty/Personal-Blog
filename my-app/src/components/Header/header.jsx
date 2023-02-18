import "./header.css";

function Header(){
return(

   <div class="navbar navbar-nav navbar-expand-lg navbar-dark ">

  <div class="container">
    <div class="navbar-header">
      <p class="navbar-brand" href="">
       <img className="img" src="https://media.licdn.com/dms/image/C4E03AQFjkJ8sh7Ywaw/profile-displayphoto-shrink_200_200/0/1660130720842?e=1681344000&v=beta&t=sPzIr8wqev46_zVWyDzPlOMcLSmxhcNEguzDrL3PAmk" alt="rimty"/>
        Memoir
        </p>
    </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
     
 <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

<ul class="nav navbar-nav ms-auto ">
  <li id="home">
    <a class="nav-link" href="/">HOME</a>
  </li>  

    <li id="blogs">
    <a class="nav-link" href="/blogs">BLOGS</a>
  </li> 

  <li id="about">
    <a class="nav-link" href="/about">ABOUT</a>
  </li>
  <li id="contact">
    <a class="nav-link" href="/contact">CONTACT</a>
  </li>
</ul>
<i className="fas fa-search"></i>
</div>
   
  
  </div>
</div>
); 
}


  
export default Header;

