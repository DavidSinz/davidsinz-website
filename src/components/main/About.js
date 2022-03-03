import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaWordpressSimple,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        Hello! My name is David and i enjoy building projects for the internet.
        My interest for web developement started back in 2015, when i decided to
        build my first fully functional website.
      </p>
      <p>
        I studied media informatics and information science at the university
        and had the privileg to learn alot about computer programming and web
        development. My main focus these days is building accessible, high high
        quality products and creating the best user experience for a variety of
        clients.
      </p>
      <p>Here are a few technologies I've been working with recently:</p>
      <ul>
        <li>
          <FaJs /> JavaScript
        </li>
        <li>
          <FaReact /> React
        </li>
        <li>
          <FaNodeJs /> Node.js
        </li>
        <li>
          <FaWordpressSimple /> Wordpress
        </li>
        <li>
          <FaHtml5 /> HTML
        </li>
        <li>
          <FaCss3Alt /> CSS3
        </li>
      </ul>
    </section>
  );
};

export default About;
