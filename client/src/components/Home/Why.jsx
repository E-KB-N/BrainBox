import React from "react";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.png";

const Why = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <div className="grid place-items-center gap-10 text-center w-[70%] mx-auto">
          <h2 className="text-2xl font-semibold">Why Learn With BrainBox?</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="">
              <div className="mb-8">
                <img src={image1} alt="" />
              </div>
              <h2 className="text-2xl font-semibold">Recommendation System</h2>
              <p>Get access to courses related to your carrer path</p>
            </div>

            <div className="">
              <div className="mb-8">
                <img src={image2} alt="" />
              </div>
              <h2 className="text-2xl font-semibold">Learning Resources</h2>
              <p>Get access to learning resources for free.</p>
            </div>

            <div className="">
              <div className="mb-8">
                <img src={image2} alt="" />
              </div>
              <h2 className="text-2xl font-semibold">Assessment</h2>
              <p>Evaluate your abilities with our precise assessment tool.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
