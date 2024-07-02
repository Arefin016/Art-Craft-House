import art1 from "../../../assets/Art1.png"
import art2 from "../../../assets/Art2.png"
import art3 from "../../../assets/Art3.png"
import CountUp from "react-countup"

import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { Fade } from "react-awesome-reveal"
// ..
AOS.init()
const Banner = () => {
  const [text] = useTypewriter({
    words: ['Craft House'],
    loop:{},
})
  return (
    //This is the daisy ui carusel
    <div
      className="carousel w-full"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero min-auto bg-black text-white">
          <div className="lg:max-w-[900px] max-w-[320px] hero-content flex-col lg:flex-row-reverse">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={art1}
              className="lg:w-[500px] w-[320px] lg:h-[400px] rounded-t-full shadow-2xl"
            />
            <div>
              <h1
                className="text-5xl font-bold"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                Welcome To Art & {text}<Cursor></Cursor>
              </h1>
             <Fade direction="left">
             <p
                className="py-6"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                Welcome to Art & Craft House, where creativity finds its home. Explore a world of inspiration and expression through our curated collection of artistic wonders.
              </p>
             </Fade>
              {/* Stat  start*/}
              <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                  <div className="stat-title"></div>
                  <CountUp
                    className="text-3xl font-bold"
                    start={25000}
                    end={31000}
                    duration={5}
                  >
                    <div className="stat-value">31000</div>
                  </CountUp>
                  <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                  <div className="stat-title"></div>
                  <CountUp
                    className="text-3xl font-bold"
                    start={3000}
                    end={4200}
                    duration={5}
                  >
                    <div className="stat-value">4200</div>
                  </CountUp>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-title"></div>
                  <CountUp
                    className="text-3xl font-bold"
                    start={800}
                    end={1200}
                    duration={5}
                  >
                    <div className="stat-value">1200</div>
                  </CountUp>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
              {/* Stat finish */}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="hero min-auto  bg-black text-white">
          <div className="lg:max-w-[900px] max-w-[320px] hero-content flex-col lg:flex-row-reverse">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={art2}
              className="lg:w-[500px] w-[320px] lg:h-[400px] rounded-t-full shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Welcome To Art & Craft House </h1>
              <p className="py-6">
              Welcome to Art & Craft House, where creativity finds its home. Explore a world of inspiration and expression through our curated collection of artistic wonders.
              </p>
              {/* Stat  start*/}
              <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                  <div className="stat-title">Downloads</div>
                  <CountUp
                    className="text-3xl font-bold"
                    start={25000}
                    end={31000}
                    duration={5}
                  >
                    <div className="stat-value">31000</div>
                  </CountUp>
                  <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Users</div>
                  <CountUp
                    className="text-3xl font-bold"
                    start={3000}
                    end={4200}
                    duration={5}
                  >
                    <div className="stat-value">4200</div>
                  </CountUp>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Registers</div>
                  <CountUp
                    className="text-3xl font-bold"
                    start={800}
                    end={1200}
                    duration={5}
                  >
                    <div className="stat-value">1200</div>
                  </CountUp>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
              {/* Stat finish */}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="hero min-auto  bg-black text-white">
          <div className="lg:max-w-[900px] max-w-[320px] hero-content flex-col lg:flex-row-reverse">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={art3}
              className="lg:w-[500px] w-[320px] lg:h-[400px] rounded-t-full shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Welcome To Art & Craft House </h1>
              <p className="py-6" data-aos="zoom-in" data-aos-duration="1000">
               Welcome to Art & Craft House, where creativity finds its home. Explore a world of inspiration and expression through our curated collection of artistic wonders.
              </p>
              {/* Stat  start*/}
              <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                  <div className="stat-title">Downloads</div>
                  <CountUp
                    className="text-3xl font-bold"
                    start={25000}
                    end={31000}
                    duration={5}
                  >
                    <div className="stat-value">31000</div>
                  </CountUp>
                  <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Users</div>
                  <CountUp
                    className="text-3xl font-bold"
                    start={3000}
                    end={4200}
                    duration={5}
                  >
                    <div className="stat-value">4200</div>
                  </CountUp>

                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Registers</div>
                  <CountUp
                    className="text-3xl font-bold"
                    start={800}
                    end={1200}
                    duration={5}
                  >
                    <div className="stat-value">1200</div>
                  </CountUp>

                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
              {/* Stat finish */}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
