import { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom'
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Image, Placeholder } from "cloudinary-react";

// Import Icones
import { useNavigate, useParams } from "react-router-dom/dist";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as IconLink } from "../assets/iconLink.svg";
import { ReactComponent as IconReturn } from "../assets/iconReturn.svg";
import Layout from "./Layout";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CSSPlugin);
}

function WorkPage({ data }) {
  const navigate = useNavigate();

  const { slug } = useParams();

  const [isLink, setIsLink] = useState(false);
  const [isGit, setIsGit] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleLink = () => {
    setIsLink(!isLink);
  };

  const handleHover = () => {
    setIsHover(!isHover);
  };

  const handleGit = () => {
    setIsGit(!isGit);
  };

  useEffect(() => {
    const tl = gsap.globalTimeline;

    tl.fromTo(
      ".SidouxieLogo",
      { css: { fill: "#1c1c1c" } },
      {
        ease: "power3.out",
        css: { fill: "#fff" },
        scrollTrigger: {
          id: "Logo",
          trigger: ".SidouxieLogo",
          start: "top top",
          end: "top+=1400",
          markers: false,
          toggleActions: "play reset play none",
        },
      }
    ).fromTo(
      ".IconUp",
      { css: { fill: "#1c1c1c" } },
      {
        ease: "power3.out",
        css: { fill: "#fff" },
        scrollTrigger: {
          id: "Logo",
          trigger: ".IconUp",
          start: "top top",
          end: "top+=1400",
          markers: false,
          toggleActions: "play reset play none",
        },
      }
    );
  }, []);

  /**
   * Find the right post from data with :slug params
   */

  const post = data.find((p) => p.slug === slug);
  console.log("result : ", post);

  // console.log(data.find((p) => p.slug === slug));
  console.log(post);

  return (
    <>
      {Array.isArray(data) && data.length !== 0 ? (
        <Layout>
          <main className="main-work-page">
            <motion.div
              className="section-details"
              animate={{ backgroundColor: post.color }}
            >
              <div className="container">
                <div className="wrapper">
                  <div className="section-head">
                    <div className="icon-return" onClick={() => navigate(-1)}>
                      <IconReturn
                        width="38px"
                        height="38px"
                        onMouseEnter={() => handleHover(isHover)}
                        onMouseLeave={() => handleHover(!isHover)}
                        style={{
                          fill: `${isHover ? post.colorText : post.colorTitle}`,
                          cursor: "pointer",
                        }}
                      />
                    </div>

                    <div
                      style={{ color: post.colorText, opacity: 0.5 }}
                      className="category"
                    >
                      <h3>site web</h3>
                    </div>
                    <div className="title">
                      <h2 style={{ color: post.colorTitle }}>{post.title}</h2>
                      <span
                        style={{ color: post.colorText, opacity: 0.5 }}
                        className="domain"
                      >
                        {post.domain}{" "}
                      </span>
                    </div>

                    <div className="sec-text">
                      <div className="sec-card">
                        <div className="subtitle">
                          <h2 style={{ color: post.colorTitle }}>Résumer</h2>
                        </div>
                        <div style={{ color: post.colorText }} className="text">
                          <p>{post.description}</p>
                        </div>
                      </div>
                      <div className="sec-card">
                        <div className="subtitle">
                          <h2 style={{ color: post.colorTitle }}>Stacks</h2>
                        </div>

                        <div className="sec-span">
                          {post &&
                            post?.techno.map(({ id, stacks }) => (
                              <span
                                className="container-span"
                                style={{ opacity: 0.8 }}
                                key={id}
                              >
                                {stacks?.map((stack) => (
                                  <span
                                    className="content-span"
                                    style={{
                                      color: post.colorText,
                                      border: `0.5px ${post.colorText} solid`,
                                    }}
                                    key={id + 1}
                                  >
                                    {stack}
                                  </span>
                                ))}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="sec-link">
                      <div className="link">
                        <span style={{ color: post.colorTitle }}>
                          consulter le site
                        </span>
                        <a
                          target="_blank"
                          href={post.link}
                          rel="noopener noreferrer"
                        >
                          <IconLink
                            width="32px"
                            title={`${post.title} site web`}
                            onMouseEnter={() => handleLink(isLink)}
                            onMouseLeave={() => handleLink(!isLink)}
                            style={{
                              fill: `${
                                isLink ? post.colorTitle : post.colorText
                              }`,
                              cursor: "pointer",
                            }}
                          />
                        </a>
                      </div>
                      <div className="link">
                        <span style={{ color: post.colorTitle }}>
                          voir le code
                        </span>
                        <a
                          target="_blank"
                          href={post.github}
                          rel="noopener noreferrer"
                        >
                          <Github
                            width="32px"
                            title={`${post.title} Github repository`}
                            onMouseEnter={() => handleGit(isGit)}
                            onMouseLeave={() => handleGit(!isGit)}
                            style={{
                              fill: `${
                                isGit ? post.colorTitle : post.colorText
                              }`,
                              cursor: "pointer",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* section images */}

            <div className="section-image">
              <Image
                src={`${process.env.REACT_APP_API_URL}/upload/${post.photo}`}
                alt={`capture background de site ${post.title}`}
                width="1000px"
                height="562px"
              >
                <Placeholder type="blur" />
              </Image>
            </div>

            <div className="section-desc">
              <div className="container">
                <div className="wrapper">
                  <div className="title">
                    <h3>Le concepte design du projet</h3>
                  </div>
                  <div className="subtitle">
                    <h5>l'importance de l'ux dans le digital</h5>
                  </div>

                  <div className="text">
                    <p>{post.description}</p>
                  </div>

                  {/* section image mockup */}

                  <div className="section-mockup">
                    <Image
                      src={`${process.env.REACT_APP_API_URL}/upload/${post.mockupPhoto}`}
                      alt={`Mockup du projet ${post.title}`}
                    >
                      <Placeholder type="blur" />
                    </Image>
                  </div>

                  <div className="section-btn">
                    <a
                      target="_blank"
                      href={post.link}
                      rel="noopener noreferrer"
                    >
                      visiter le site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Layout>
      ) : (
        <div>No Post For You</div>
      )}
    </>
  );
}

export default WorkPage;
