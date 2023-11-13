import "./index.css";

const About = () => {
  return (
    <>
      <h2 className="Header">What is this Club?</h2>
      <p>
        The LASA Red Cross Club is a club that is affiliated with the American
        Red Cross Youth Action Campaign (YAC). The goal of this campaign is to
        promote the principles of International Humanitarian Law (IHL) through a
        specific topic chosen by the Red Cross each year. The Red Cross has a
        mandate to promote the ideas of IHL and our club supports those efforts.
        Last year, it was about the Environmental effects of Armed conflict, so
        our club hosted events such as Jeopardy games and Field Games to spread
        this message. We also posted on social media to increase the awareness
        of IHL in our community too. Here are some photos from last year!{" "}
      </p>
      <div className="parentPhoto">
        <img className="photoExample" src="fieldGame.jpeg" />
        <img className="photoExample" src="jeopardyGame.jpeg" />
      </div>

      <p>
        This year, the Red Cross wants us to promote IHL through the lens of
        Nuclear Weapons and Armed Conflict. Throughout the year, we will host
        events that educate people on what International Humanitarian Law is
        just like we did last year. We hope you will join us and spread this
        message!
      </p>
    </>
  );
};

export default About;