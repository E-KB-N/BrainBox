import level400 from "../../data/level200data";
import { Link } from "react-router-dom";

const Level400 = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <div className="">
          <h2 className="mb-4 text-2xl font-bold underline">Level 100</h2>
          <ul>
            {level400.map((course) => {
              return (
                <li key={course.id}>
                  <Link
                    to={`/all-courses/${course.id}`}
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

export default Level400;
