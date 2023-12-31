
import level200 from "../../data/level200data";
import { Link } from "react-router-dom";

const Level200 = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <div className="">
        <Link
            to="/all-courses"
            className="font-weight text-primary text-3xl mb-8 hover:underline"
          >
            Back to All courses
          </Link>
          <h2 className="mb-4 text-2xl font-bold underline">Level 100</h2>
          <ul>
            {level200.map((course) => {
              return (
                <li key={course.id}>
                  <Link
                    to={`/all-courses/level200/${course.id}`}
                    className="flex items-center gap-4 mb-4"
                  >
                    <span className="font-semibold">{course.uniqueCode}</span>
                    {course.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Level200;
