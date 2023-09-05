import React from "react";
import image1 from "../../assets/algebra.jpg";
import image2 from "../../assets/vectors.jpg";
import image3 from "../../assets/vectors.jpg";

const Popular = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <div className="grid place-items-center gap-10 text-center w-[70%] mx-auto">
          <h1 className="text-3xl font-semibold">Popular Courses</h1>
          <h2 className="text-xl">
            Embark on a transformative learning experience with our sought-after
            courses, tailored to empower your educational journey.
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="">
              <div className="mb-8">
                <img src={image1} alt="" />
              </div>
              <h2 className="text-2xl font-semibold">
                Algebra and Trigonometry
              </h2>
              <p>
                Strengthen math skills with equation-solving and graphing
                techniques in this comprehensive course.
              </p>
            </div>

            <div className="">
              <div className="mb-8">
                <img src={image2} alt="" />
              </div>
              <h2 className="text-2xl font-semibold">Vectors and Geometry</h2>
              <p>
                Unlock 3D insights and learn to apply vectors to real-world
                scenarios in this illuminating course.
              </p>
            </div>

            <div className="">
              <div className="mb-8">
                <img src={image3} alt="" />
              </div>
              <h2 className="text-2xl font-semibold">
                Introduction to Economics I
              </h2>
              <p>
                Get acquainted with economics essentials, from supply and demand
                dynamics to decision-making processes, in this foundational
                course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
