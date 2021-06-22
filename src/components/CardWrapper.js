import React, {useEffect} from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

function CardWrapper({ data }) {
  useEffect(() => {
    
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#Darky-plumbing',
          start: "top 200px",
          end: "+=300px",
          scrub: 1,
          markers: true
        }
      })

      tl.addLabel("start")
        .from("#Darky-plumbing", { css: { zIndex: -1 } })
    
    
    gsap.to("#Darky-plumbing", 0.6,{
      delay: 0.2,
      ease: "power3.out",
      css: { zIndex: 1, height: "100%" },
      scrollTrigger: {
        trigger: "#Darky-plumbing",
      start: "top top",
      end: "+=300px",
      scrub: true,
      },
      
      stagger: {
        amount: 0.4
      },
    })
      ScrollTrigger.refresh();
  }, [])
  return (
    <div className="card-index" style={{backgroundImage: `url(${data.imgPath})`}}>
      <div className="sec-head">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
      <div id={data.title} className="sec-bg" style={{ backgroundColor: data.color }}></div>
    </div>
  )
}

export default CardWrapper
