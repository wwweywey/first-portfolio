import Header from "/src/component/Header";
import Footer from "/src/component/Footer";
import ProfilePage from "./page/profile/Profile";
import ContactPage from "./page/contact/Contact";
import BlogPage from "./page/blog/Blog";
import ProjectPage from "./page/project/Project";

function App() {
  return (
    <>
      <Header />
      <ProfilePage />
      <ProjectPage />
      <BlogPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
