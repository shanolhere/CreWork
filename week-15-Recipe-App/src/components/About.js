import banner from "../assets/cooking.png";

const About = () => {
  return (
    <div className="aboutContainer">
      <h1> About </h1>
      <p>
        The app is made using React and it uses Edamam API for fetching the
        recipes from their server.
      </p>
      <img src={banner} alt="cooking" />
    </div>
  );
};
export default About;
