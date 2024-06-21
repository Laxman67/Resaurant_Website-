import { Link } from "react-scroll";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US </h1>
            <p>The only thing we're serios about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            dolorum accusantium eaque aspernatur vel possimus ab consequuntur
            cupiditate! Sunt sint fugiat amet earum ea molestias ab rem
            blanditiis quis, quasi, placeat ullam dignissimos veritatis facere
            ut, reprehenderit doloribus magnam culpa! Aliquam culpa, tempora
            laborum perferendis vero fugiat nam dicta rerum?
          </p>
          <Link to="/"> 
          Explore Menu <span>
            <HiOutlineArrowNarrowRight/>
          </span>

          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about"  />
        </div>
      </div>
    </section>
  );
};

export default About;
