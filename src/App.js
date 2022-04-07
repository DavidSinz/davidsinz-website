import img1 from "./images/amazon-landingpage-clone.png";
import img2 from "./images/api-app.png";
import img3 from "./images/asteroid.png";
import img4 from "./images/smoothie-fun.png";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const canvasRef = useRef();
  const homeRef = useRef();
  const yPosRef = useRef([]);
  const contactRef = useRef();
  const [toSend, setToSend] = useState({
    subject: "",
    message: "",
  });

  const onContact = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    window.open(`mailto:davidsinz@gmx.net?subject=${toSend.subject}&body=${toSend.message}`)
  };

  const handleFormInput = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  const draw = (ctx) => {
    setTimeout(function () {
      ctx.fillStyle = "#0001";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = "15pt monospace";
      yPosRef.current.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) yPosRef.current[ind] = 0;
        else yPosRef.current[ind] = y + 20;
      });
      requestAnimationFrame(() => draw(ctx, yPosRef.current));
    }, 20);
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const w = (ctx.canvas.width = document.body.offsetWidth);
    const h = (ctx.canvas.height = document.body.offsetHeight);
    yPosRef.current = Array(Math.floor(w / 20) + 1).fill(0);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);
    requestAnimationFrame(() => draw(ctx));
    const handleResize = (event) => {
      ctx.canvas.height = homeRef.current.clientHeight;
      ctx.canvas.width = homeRef.current.clientWidth;
      yPosRef.current = Array(Math.floor(ctx.canvas.width / 20) + 1).fill(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="matrix" />
      <header>
        <nav>
          <ul>
            <li>home</li>
            <li>portfolio</li>
            <li>skills</li>
            <li>contact</li>
            <li>resume</li>
          </ul>
        </nav>
      </header>
      <main>
        <section ref={homeRef} id="home">
          <div id="greet-area">
            <h1>
              Hi,
              <br />
              I'm David,
              <br />
              web developer
            </h1>
            <p className="sub-heading">Front End developer</p>
            <button onClick={onContact}>Contact me!</button>
          </div>
        </section>
        <section id="skills">
          <h2>My Skills</h2>
          <p>
            I'm a passionate developer, constantly seeking opportunity to
            increase my experience and my skill set. I had the chance to work on
            numerous projects and to learn popular web technologies. Currently,
            I'm interested in learning react and building my own portfolio.
          </p>
          {/*<canvas id="learned-skills"></canvas>*/}
        </section>
        <section id="portfolio">
          <h2>My Portfolio</h2>
          <p>
            A small gallery of recent projects chosen by me. I've done them all
            alone or together with amazing people I had the chance to work with
            together. It's only the tip of the iceberg compared to the entire
            list. Interested to see some more? Visit{" "}
            <a href="https://github.com/DavidSinz">my GitHub</a> account.
          </p>
          <div id="recent-projects">
            <div onClick={() => {
              window.open("https://github.com/DavidSinz/clone-website");
            }} className="portfolio-img">
              <img src={img1} alt="1" />
              <p>View</p>
            </div>
            <div onClick={() => {
              window.open("https://github.com/DavidSinz/api-app");
            }} className="portfolio-img">
              <img src={img2} alt="1" />
              <p>View</p>
            </div>
            <div onClick={() => {
              window.open("https://github.com/DavidSinz/asteroids-game");
            }} className="portfolio-img">
              <img src={img3} alt="1" />
              <p>View</p>
            </div>
            <div onClick={() => {
              window.open("https://github.com/DavidSinz/smoothie-fun");
            }} className="portfolio-img">
              <img src={img4} alt="1" />
              <p>View</p>
            </div>
          </div>
        </section>
        <section ref={contactRef} id="contact">
          <div id="contact-text">
            <h2>Contact me</h2>
            <p>
              I'm interested in job offers and freelance opportunities. However,
              if you have another request or question, don't hesitate to use the
              form.
            </p>
          </div>
          <form id="contact-form" onSubmit={onSubmit} autoComplete="off">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={toSend.subject}
              onChange={handleFormInput}
              required
            />
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              rows="5"
              value={toSend.message}
              onChange={handleFormInput}
              required
            />
            <button type="submit" name="submit">
              Send message!
            </button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2022 David Sinz</p>
      </footer>
    </>
  );
};

export default App;
