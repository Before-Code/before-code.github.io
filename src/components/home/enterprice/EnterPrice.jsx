import collabrationImg from "../../../assets/collaboration.svg";
import intelligentImg from "../../../assets/intelligent.svg";
import apiImg from "../../../assets/api.svg";
import progressImg from "../../../assets/progress.svg";
import customizationImg from "../../../assets/customization.svg";
import integrationImg from "../../../assets/integration.svg";
const EnterPrice = () => {
  const cardInformation = [
    {
      cardIcon: collabrationImg,
      cardTitle: "Collaboration & Sharing",
      bgColor: "#E9DFFF",
    },
    {
      cardIcon: intelligentImg,
      cardTitle: "Intelligent Analysis",
      bgColor: "#DCF0F2",
    },
    {
      cardIcon: apiImg,
      cardTitle: "API",
      bgColor: "#F4E0F0",
    },
    {
      cardIcon: progressImg,
      cardTitle: "Progress Tracking",
      bgColor: "#FDEBDD",
    },
    {
      cardIcon: customizationImg,
      cardTitle: "Customization & Flexibility",
      bgColor: "#e9d5eef7",
    },
    {
      cardIcon: integrationImg,
      cardTitle: "Integration & Export ",
      bgColor: "#F2F4F6",
    },
  ];
  return (
    <section className="enterpise py-[100px] mg:py-[140px]">
      <div className="main_container">
        <div className="seciton_title pb-[60px]">
          <h2 className="text-4xl md:text-5xl font-bold text-[#252F40] text-center">
            Enterprise Grade Features
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-[30px]">
          {cardInformation.map((cardItem, index) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={index}>
              <div
                className="card_wrapper py-[60px] px-[30px] rounded-xl flex flex-col items-center"
                style={{ backgroundColor: `${cardItem.bgColor}` }}>
                <div>
                  <img className="pb-5" src={cardItem.cardIcon} alt="img" />
                </div>
                <p className="text-xl font-bold text-[#252F40]">
                  {cardItem.cardTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterPrice;
