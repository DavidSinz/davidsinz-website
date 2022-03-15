import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

const App = () => {
  return (
    <>
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
        <section id="home">
          <div id="greet-area">
            <h1>
              Hi,
              <br />
              I'm David,
              <br />
              web developer
            </h1>
            <p className="sub-heading">Front End developer</p>
            <button>Contact me!</button>
          </div>
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
            <div class="portfolio-img"><img src={img1} alt="1" /><p>Click!</p></div>
            <div class="portfolio-img"><img src={img2} alt="1" /><p>Click!</p></div>
            <div class="portfolio-img"><img src={img3} alt="1" /><p>Click!</p></div>
            <div class="portfolio-img"><img src={img4} alt="1" /><p>Click!</p></div>
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
        <section id="contact">
          <h2>Contact me</h2>
          <p>
            I'm interested in job offers and freelance opportunities. However,
            if you have another request or question, don't hesitate to use the
            form.
          </p>
          <form autocomplete="off">
            <input type="text" name="name" value="" placeholder="Name" />
            <input type="email" name="email" value="" placeholder="E-Mail" />
            <input type="text" name="subject" value="" placeholder="Subject" />
            <textarea
              type="text"
              name="message"
              value=""
              placeholder="Message"
              rows="5"
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
