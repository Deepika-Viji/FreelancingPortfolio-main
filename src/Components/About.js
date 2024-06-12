import React from "react";

const profileImage =
  "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg";

const About = () => {
  return (
    <div className="text-white bg-[#0F0F0F] flex flex-col justify-center items-center pb-10">
      <div className="text-xl font-semibold text-[#F06000] text-center mt-24">
        About
      </div>
      <div className="text-white text-center text-3xl font-extrabold">
        Let me introduce myself.
      </div>

      {/* profile image and about */}
      <div className="flex flex-row justify-center items-center gap-7 mt-10">
        <img
          src={profileImage}
          alt="hello"
          className="w-32 h-32 rounded-full border-2 border-[#F06000] mt-5"
        />
        <div className="text-white text-lg mt-5 w-1/3">
          I'm an engineer seeking moonshot in the health / bio sector. I'm also
          Stanford class of 2020 B.S. in Biomedical Computation, and class of
          2021 M.S. in Computer Science AI specialization. My primary interests
          have been precision health, data flow, zero to one, and the list is
          still growing.
        </div>
      </div>

      {/* profileData and Skills */}
      <div className="flex flex-row justify-center items-center gap-14 mt-10">
        <div className="flex flex-col w-80">
          <div className="text-white text-2xl font-bold">PROFILE</div>
          <div className="mt-5">
            Currently I have a job, but am open to new software
            engineering/product owner/startup opportunities. If you think I'm a
            good fit, please contact me via sunnybd97@gmail.com.
          </div>
          <div className="text-[#333333] mt-5">
            FULLNAME: <br />
            <span className="text-[#888888]">Sunwoo Kang</span>
          </div>

          <div className="text-[#333333] mt-5">
            BIRTH DATE: <br />
            <span className="text-[#888888]">July 30, 1997</span>
          </div>

          <div className="text-[#333333] mt-5">
            EMAIL: <br />
            <span className="text-[#888888]">sunnybd97@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col w-80">
          <div className="text-white text-2xl font-bold">SKILLS</div>
          <div className="mt-5">
            I'm a cell-like independent teamworker, strong in research and
            coding. My areas of expertise are computer science, bioinformatics,
            and genetics. Below are highlights of my technical skills:
          </div>

          {/* Skills and Progress Bars */}
          <div className="mt-5">
            <div className="text-[#888888]">
              HTML
              <div className="w-full bg-[#313131] rounded-full h-2.5 mt-1">
                <div
                  className="bg-[#A1A1A1] h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="text-[#888888] mt-3">
              PYTHON
              <div className="w-full bg-[#313131] rounded-full h-2.5 mt-1">
                <div
                  className="bg-[#A1A1A1] h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="text-[#888888] mt-3">
              JAVASCRIPT
              <div className="w-full bg-[#313131] rounded-full h-2.5 mt-1">
                <div
                  className="bg-[#A1A1A1] h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div className="text-[#888888] mt-3">
              CSS
              <div className="w-full bg-[#313131] rounded-full h-2.5 mt-1">
                <div
                  className="bg-[#A1A1A1] h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hire me and download button */}
      <div className="flex flex-row justify-center items-center gap-7 mt-20">
        <button className="bg-[#11ABB0] text-white py-4 px-24 rounded-sm font-bold">
          Hire Me
        </button>
        <button className="bg-[#11ABB0] text-white py-4 px-24 rounded-sm font-bold">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
