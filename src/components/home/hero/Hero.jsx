import { Link } from "react-router-dom";
import playIcon from "../../../assets/playbtn.svg";
import videoImg from "../../../assets/video_img.png";
import ReactPlayer from "react-player";
import { useState } from "react";
import shapeOne from "../../../assets/shapeOne.svg";
import shapeTwo from "../../../assets/shape_Two.svg";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <section className="hero bg-hero-img bg-no-repeat bg-cover bg-center pt-44 mg:pt-60 pb-28">
        <div className="main_container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <div className="pb-12 relative">
                <img
                  className="shapeOne absolute top-0 left-[-8%] hidden md:block"
                  src={shapeOne}
                  alt="shape-one"
                />

                <h1 className="text-4xl md:text-6xl font-bold text-white pb-5 leading-[50px] md:leading-[75px] relative">
                  {/* <img className="shapeTwo absolute top-[30%] left-[-2%] hidden md:block" src={shapeTwo} alt="shape-two" /> */}
                  AI Partner to Translate Your Vision Into Requirements
                </h1>
                <p className="text-base font-normal text-white">
                  Use casegen as your virtual business analyst
                </p>
              </div>

              <Link className="inline-block py-[14px] px-5 bg-[#E0E] text-base font-bold text-white rounded-lg hover:bg-[#ee00ee83] transition duration-300">
                Contact us
              </Link>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="video_player relative">
                <div className="video_img w-full">
                  {isPlaying === true ? (
                    <div className="border-8 border-white rounded-[30px] max-w-[660px] overflow-hidden">
                      <ReactPlayer
                        style={{ borderRadius: "50px" }}
                        width={650}
                        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      />
                    </div>
                  ) : (
                    <div className="border-8 border-white rounded-[30px] max-w-[660px] overflow-hidden">
                      <img
                        className="w-full"
                        src={videoImg}
                        alt="video_player"
                      />
                    </div>
                  )}
                  {/* <img className="w-full" src={videoImg} alt="video_player" /> */}
                  {/* <YoutubeVideo videoId="KLuTLF3x9sA" thumbnailUrl={videoImg} /> */}
                </div>
                <div className="video_icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {isPlaying === false && (
                    <button onClick={handlePlay}>
                      <img src={playIcon} alt="play_icon" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
