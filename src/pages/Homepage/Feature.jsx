import { useState } from "react";
import logo from "../../assets/feature.png";
import logo1 from "../../assets/feature1.svg";
const features = [
  {
    title: "Effortlessly export projects for client review",
    description:
      "Effortlessly export projects for client review, ensuring they can see the work whenever they want. Maintain transparency and keep clients informed about project progress and details.",
    tag: "Project Exporting",
    footer:
      "CheckMateGo is built for seamless project management and effortless collaboration, empowering teams to work smarter and stay organized.",
  },
  {
    title: "Capture every detail of your project with limitless cloud storage",
    description:
      "Capture every detail of your project with limitless cloud storage.",
    tag: "Documentation",
    footer:
      "CheckMateGo is built for seamless project management and effortless collaboration, empowering teams to work smarter and stay organized.",
  },
  {
    title: "Quickly locate any project or photo with ease",
    description: "Quickly locate any project or photo with ease.",
    tag: "Efficient",
    footer:
      "CheckMateGo is built for seamless project management and effortless collaboration, empowering teams to work smarter and stay organized.",
  },
  {
    title:
      "Reassure your clients by providing complete visibility into all documentation",
    description:
      "CheckMateGo is built for seamless project management and effortless collaboration, empowering teams to work smarter and stay organized.",
    tag: "Transparency",
    footer:
      "CheckMateGo is built for seamless project management and effortless collaboration, empowering teams to work smarter and stay organized.",
  },
];

const Feature = () => {
  const [tag, setTag] = useState("Project Exporting");
  return (
    <section className="relative py-12 ">
      <div className=" z-20 mx-4 md:mx-8 lg:mx-[90px]">
        <h2 className="text-[54px] text-center font-bold text-gray-800 mb-8">
          Features
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-start  gap-8  rounded-lg">
          {/* Image Section */}
          <div className="w-full z-30 lg:w-1/2">
            <img
              src={logo} // Replace with your image source
              alt="Dashboard Overview"
              className="w-full rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex border rounded-full py-[6px] px-1 sm:px-3 gap-2 md:gap-6 mb-4">
              <span
                onClick={() => setTag("Project Exporting")}
                className={`${
                  tag === "Project Exporting" && "bg-[#22C55E]"
                } px-2 sm:px-3 py-2 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap cursor-pointer`}
              >
                Project Exporting
              </span>
              <span
                onClick={() => setTag("Documentation")}
                className={`${
                  tag === "Documentation" && "bg-[#22C55E]"
                } px-2 sm:px-3 py-2 rounded-full text-sm sm:text-base  font-semibold cursor-pointer`}
              >
                Documentation
              </span>
              <span
                onClick={() => setTag("Efficient")}
                className={`${
                  tag === "Efficient" && "bg-[#22C55E]"
                } px-2 sm:px-3 py-2 rounded-full text-sm sm:text-base  font-semibold cursor-pointer`}
              >
                Efficient
              </span>
              <span
                onClick={() => setTag("Transparency")}
                className={`${
                  tag === "Transparency" && "bg-[#22C55E]"
                } px-2 sm:px-3 py-2 text-sm sm:text-base  rounded-full font-semibold cursor-pointer`}
              >
                Transparency
              </span>
            </div>

            <div>
              {features
                .filter((f) => f.tag === tag)
                .map((k, ind) => (
                  <div key={ind}>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-6 mb-6">
                      {k?.title}
                    </h3>

                    <p className="text-gray-500 text-lg md:text-2xl mb-8">{k?.footer}</p>
                    <div className="flex gap-5">
                      <h2 className="text-5xl lg:text-6xl font-bold">80%</h2>
                      <p className="text-lg  md:w-2/3 ">
                        of the Feature X/Queue Checkmate go to work with
                        partners and customers.
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <img className="absolute bottom-0 h-[350px] md:h-[400px] lg:h-[450px] " src={logo1} alt="" />
    </section>
  );
};

export default Feature;
