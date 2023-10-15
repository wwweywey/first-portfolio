import "./profile.scss";

const Profile = () => {
  return (
    <section id="intro-page">
      <div className="intro-content">
        <div className="welcome-detail">
          <h1>Butter</h1>
          <p>
            Eat &gt; Design &gt; Develop &gt; Sleep &gt; Repeat <br />
            <br />I design for web assets, marketing collaterals, clothing lines
            and more. with a side hobby for cycling and photography
          </p>

          <img
            className="mouse-scroll"
            src="Assets/ico/mouse-cursor.svg"
            alt=""
          />
          <div className="resume-bttn">
            <button className="resume-button">SEE MY RESUME</button>
          </div>
        </div>
        <div className="welcome-photo">
          <img src="Assets/img/introPicture.png" alt="welcome-photo" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
