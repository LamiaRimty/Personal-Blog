import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Blog from "../../components/blog/Blog";
export default function Blogs() {
  return (
    <>
      <div className="blogs">
        <Header />
        <h1>React Router Contacts</h1>
        <article>
          <a href={`blog/1`}>
            <h1>My journey to Web Development</h1>
          </a>
          <a href={`blog/2`}>
            <h1>Difference between == and === in javascript</h1>
          </a>
          <a href={`blog/3`}>
            <h1>Ways of Creating objects JavaScript</h1>
          </a>
        </article>
        <div id="detail"></div>
        <Footer />
      </div>
    </>
  );
}
