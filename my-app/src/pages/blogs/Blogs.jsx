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
          <h1>
            <a href={`blog/1`}>My journey to Web Development</a>
          </h1>
          <h1>
            <a href={`blog/2`}>Difference between == and === in javascript</a>
          </h1>
          <h1>
            <a href={`blog/3`}>Ways of Creating objects JavaScript</a>
          </h1>
        </article>
        <div id="detail"></div>
        <Footer />
      </div>
    </>
  );
}
