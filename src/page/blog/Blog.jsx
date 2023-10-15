import "./blog.scss";

const Blog = () => {
  return (
    <section id="blog-page">
      <div className="blog-content">
        <div className="blog-post post1">
          <div className="blog-text">
            <h1>Ferris Wheel</h1>
            <p>
              - is an amusement ride consisting of a rotating upright wheel with
              multiple passenger-carrying components attached to the rim in such
              a way that as the wheel turns, they are kept upright, usually by
              gravity
            </p>
            <a href="#"></a>
          </div>
        </div>
        <div className="blog-post post2">
          <div className="blog-text">
            <h1>Cafe Kapitan Restaurant</h1>
            <p>
              - is one of the restaurants in the Kapitan Moy Building in
              Marikina, just across the Lady of the Abandoned Church in San
              Roque. The building in itself is the 200 year-old preserved house
              of Don Laureano Guevarra, also known as Kapitan Moy, Founder of
              the Marikina Shoe Industry.
            </p>
            <a href="#"></a>
          </div>
        </div>
        <div className="blog-post post3">
          <div className="blog-text">
            <h1>Railway</h1>
            <p>
              - is consists of two parallel steel rails that provide a stable
              and aligned surface for the train &apos s wheels to roll on. The
              track is typically laid on a bed of gravel or ballast, which helps
              to distribute the weight of the train and maintain stability.
            </p>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
