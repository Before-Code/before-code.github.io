import sendBtn from "../../../assets/send-icon.svg";
const Connect = () => {
  return (
    <section className="connect_with_us py-[100px]">
      <div className="main_container">
        <div className="connect_with_us_wrapper bg-[#111111] py-[80px] px-[30px] flex justify-center rounded-[20px]">
          <div className="send_wrapper text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold pb-8">
              Connect with us
            </h2>
            <div className="input_field flex gap-[10px]">
              <input
                type="email"
                className="max-w-[530px] w-full py-5 px-8 rounded-xl outline-none"
                placeholder="Your work email"
              />
              <button className="p-5 bg-[#E0E] rounded-xl">
                <img src={sendBtn} alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
