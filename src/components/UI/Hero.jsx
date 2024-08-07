import CountUp from "react-countup";
import heroImg from "../../assets/images/shaon.png";

const Hero = () => {
  CountUp;
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left content  */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-4"
            >
              I'm SA Shaon <br /> Full Stack Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a
                href="https://drive.google.com/file/d/1HCHPqydcyBCSLSbfm6lcyhHMdLcHgnOA/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i> My Resume
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 mt-12 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <i className="ri-apps-2-line"></i>Developed responsive websites
              for Client, enhancing user engagement. Collaborated with design
              and back-end teams to implement interactive features. Ensured
              cross-browser compatibility and optimized page loading times.
            </p>
            <div className="flex items-center gap-7 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://github.com/SA-Shaon"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600] mr-5"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sa-shaon-58b15a1ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600] mr-5"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100009383206015"
                  target="_blank"
                  rel="noreferrer"
                  className="text-smallTextColor text-[18px] font-[600] mr-5"
                >
                  <i className="ri-facebook-circle-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/* Hero image  */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center   ">
              <img src={heroImg} alt="" className=" rounded-[100px]" />
            </figure>
          </div>
          {/* hero content right  */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={2} suffix="+"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={149} duration={2} suffix="+"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={20} duration={2} suffix="+"></CountUp>
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Complete
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
