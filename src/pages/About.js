import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "../components/Layout";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
}

const data = [
  {
    id: 1,
    title: "Express Js Logo",
    url: "./images/1.png",
  },
  {
    id: 2,
    title: "Next Js Logo",
    url: "./images/2.png",
  },
  {
    id: 3,
    title: "Sass Logo",
    url: "./images/3.png",
  },
  {
    id: 4,
    title: "React Js Logo",
    url: "./images/4.png",
  },
  {
    id: 5,
    title: "Node Js Logo",
    url: "./images/5.png",
  },
  {
    id: 6,
    title: "Mongodb Logo",
    url: "./images/6.png",
  },
  {
    id: 7,
    title: "Gatsby Js Logo",
    url: "./images/7.png",
  },
];

function About() {
  useEffect(() => {
    gsap.fromTo(
      ".title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.6, delay: 0.4, ease: "power3.out" }
    );

    gsap.fromTo(
      ".text",
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, delay: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      ".ligne",
      { css: { width: 0 }, opacity: 0 },
      {
        css: { width: "100%" },
        opacity: 1,
        duration: 2,
        delay: 0.8,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".subtitle",
      { css: { x: 50 }, autoAlpha: 0, duration: 2, delay: 0.6 },
      {
        css: { x: 0 },
        autoAlpha: 1,
        duration: 2,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <Layout>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        <div className="wrapper">
          <main className="main-about">
            <div className="title">
              <h1>About</h1>
            </div>
            <div className="text">
              <p>
                Voici le résumer de mon parcours dans le digitale en commencent
                par le design et en arriver au code.
              </p>
            </div>
            <div className="ligne" />

            <div className="sec-intro">
              <div
                className="card-profile"
                style={{ backgroundImage: "url(./images/profile_me.webp)" }}
              />
              <div className="title">
                <h3>Sid Ahmed Baroutchi</h3>
              </div>
              <div className="subtitle">
                <p>Fullstack developer javascript, web designer.</p>
              </div>

              <div className="btn-form">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={process.env.REACT_APP_RESUME_CV_URL}
                >
                  Resumé cv
                </a>
              </div>
            </div>

            <div className="sec-detail">
              <div className="section-design">
                <div className="title">
                  <h3>Design.</h3>
                </div>
                <div className="subtitle">
                  <h5>Design thinking</h5>
                </div>
                <div className="text">
                  <p>
                    Bonjour! Je m'appelle Sid Ahmed et j'aime créer des choses
                    qui vivent sur internet. Mon intérêt pour le monde du design
                    a commencé en 2012 lorsque j'ai vu une vidéo speed-art sur
                    youtube - il s'avère que j'ai commencé à apprendre les
                    outiles de la suite adobe comme photoshop & illustrator en
                    designant des photos-manipulation et les postés sur{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.deviantart.com/sidouxie2014"
                    >
                      Deviantart.
                    </a>
                  </p>
                  <p>
                    Avance rapide jusqu'à aujourd'hui, et j'ai eu le provilège
                    de travailler en freelance dans une agence, des
                    proffesionnels et des particuliers.{" "}
                  </p>
                  <p>
                    Mon objectif principal ces jours-ci est de créer des
                    produits accessibles et inclusifs et des expériences
                    numériques pour une variété de clients.
                  </p>
                </div>
              </div>

              <div className="section-dev">
                <div className="title">
                  <h3>Développement.</h3>
                </div>
                <div className="subtitle">
                  <h5>L'éxigence technique</h5>
                </div>
                <div className="text">
                  <p>
                    Mon intérêt pour le développement web a commencé en 2016
                    lorsque j'ai voulu créer un cv en ligne - j'ai commencé à
                    apprendre Html / Css, sur le site{" "}
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.openclassrooms.com"
                    >
                      openclassrooms.com
                    </a>{" "}
                    ( ex : siteduzero.fr ).
                  </p>

                  <p>
                    En 2018 j'ai commencé réellement à m'intéresser aux nouvel
                    technos react js et node js, et pour acquérir de
                    l'expérience j'ai vite commencé à travailler sur des projets
                    particuliers de mon entourage.
                  </p>

                  <p>
                    Voici quelques technologies avec lesquelles j'ai travaillé
                    récemment :
                  </p>
                </div>
                <div className="stack">
                  <div className="card-stack">
                    <span className="ligne-stack">
                      {" "}
                      <span className="triangle" /> Javascript
                    </span>
                    <span className="ligne-stack">
                      <span className="triangle" /> React
                    </span>
                    <span className="ligne-stack">
                      <span className="triangle" /> Gatsby
                    </span>
                  </div>

                  <div className="card-stack">
                    <span className="ligne-stack">
                      {" "}
                      <span className="triangle" /> Next
                    </span>
                    <span className="ligne-stack">
                      <span className="triangle" /> MongoDb
                    </span>
                    <span className="ligne-stack">
                      <span className="triangle" /> Express
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </motion.div>

      <div className="section-logos">
        <div className="wrap-card">
          {data.map((logo) => (
            <img src={logo.url} alt={logo.title} key={logo.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default About;
