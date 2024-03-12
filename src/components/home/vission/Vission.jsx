import visionImg from "../../../assets/your-vision.png";
import bluePrintImg from "../../../assets/blueprint.png";
import aiImg from "../../../assets/ai.png";

const Vission = () => {
  return (
    <section className="vission py-20 md:py-36 bg-[#FFF6FF]">
      <div className="main_container">
        <div className="grid grid-cols-12 gap-8 md:flex md:gap-[64px] md:items-center pb-[80px] md:pb-[120px]">
          <div className="col-span-12 md:basis-1/2">
            <div className="vision_section">
              <img src={visionImg} alt="vision-img" />
            </div>
          </div>
          <div className="col-span-12 md:basis-1/2">
            <div className="right_text">
              <h2 className="text-3xl md:text-5xl font-bold text-[#252F40] pb-5">
                Your <span className="text-[#723881]">Vision</span>
              </h2>
              <p className="text-base md:text-xl font-normal text-[#252F40] pb-2">
                Product visionaries envisions a new software product, and
                describes their ideas to
              </p>
              <p className="text-base md:text-xl font-normal text-[#252F40]">
                Casegen Casegen will generate use cases and
                supporting requirements
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 md:flex md:gap-[64px] md:items-center pb-[80px] md:pb-[120px]">
          <div className="col-span-12 md:basis-1/2 order-last md:order-first">
            <div className="right_text">
              <h2 className="text-3xl md:text-5xl font-bold text-[#252F40] pb-5">
                Design <span className="text-[#723881]">Blueprint</span>
              </h2>
              <p className="text-base md:text-xl font-normal text-[#252F40] pb-2">
                The generated use cases are represented visually in a diagram,
                displaying the main actors, roles & actions to better convey to
                developers
              </p>
            </div>
          </div>

          <div className="col-span-12 md:basis-1/2">
            <div className="vision_section">
              <img src={bluePrintImg} alt="vision-img" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 md:flex md:gap-[64px] md:items-center">
          <div className="col-span-12 md:basis-1/2">
            <div className="vision_section">
              <img src={aiImg} alt="vision-img" />
            </div>
          </div>
          <div className="col-span-12 md:basis-1/2">
            <div className="right_text">
              <h2 className="text-3xl md:text-5xl font-bold text-[#252F40] pb-5">
                AI <span className="text-[#723881]">Refinement</span>
              </h2>
              <p className="text-base md:text-xl font-normal text-[#252F40] pb-2">
                The AI will generate additional information that will help
                clarify the needs of the product
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vission;
