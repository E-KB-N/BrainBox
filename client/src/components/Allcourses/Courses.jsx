import { Link } from "react-router-dom";
import data from "../../data/data";

const Courses = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <div className="grid place-items-center gap-10 text-center w-[70%] mx-auto">
          <h1 className="text-3xl font-semibold pt-12">All Courses</h1>
          <h2 className="text-xl">
            Embark on a transformative learning experience with our sought-after
            courses, tailored to empower your educational journey.
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {data.slice(0, 3).map((course) => {
              return (
                <div className="" key={course.id}>
                  <div className="mb-8">
                    <img src={`../images/${course.img}`} alt={course.title} />
                  </div>
                  <h2 className="text-2xl font-semibold">{course.title}</h2>
                  <p>{course.about}</p>
                </div>
              );
            })}
          </div>
          <Link
            to="/level100"
            className="p-4 bg-teal-800 cursor-pointer text-white rounded-lg"
          >
            Level 100 Courses
          </Link>

          <div className="grid gap-6 lg:grid-cols-3">
            {data.slice(3, 6).map((course) => {
              return (
                <div className="" key={course.id}>
                  <div className="mb-8">
                    <img src={`../images/${course.img}`} alt={course.title} />
                  </div>
                  <h2 className="text-2xl font-semibold">{course.title}</h2>
                  <p>{course.about}</p>
                </div>
              );
            })}
          </div>

          <Link
            to="/level200"
            className="p-4 bg-teal-800 cursor-pointer text-white rounded-lg"
          >
            Level 200 Courses
          </Link>

          <div className="grid gap-6 lg:grid-cols-3">
            {data.slice(6, 9).map((course) => {
              return (
                <div className="" key={course.id}>
                  <div className="mb-8">
                    <img src={`../images/${course.img}`} alt={course.title} />
                  </div>
                  <h2 className="text-2xl font-semibold">{course.title}</h2>
                  <p>{course.about}</p>
                </div>
              );
            })}
          </div>

          <Link
            to="/level300"
            className="p-4 bg-teal-800 cursor-pointer text-white rounded-lg"
          >
            Level 300 Courses
          </Link>

          <div className="grid gap-6 lg:grid-cols-3">
            {data.slice(9, 11).map((course) => {
              return (
                <div className="" key={course.id}>
                  <div className="mb-8">
                    <img src={`../images/${course.img}`} alt={course.title} />
                  </div>
                  <h2 className="text-2xl font-semibold">{course.title}</h2>
                  <p>{course.about}</p>
                </div>
              );
            })}
          </div>

          <Link
            to="/level400"
            className="p-4 bg-teal-800 cursor-pointer text-white rounded-lg"
          >
            Level 400 Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
