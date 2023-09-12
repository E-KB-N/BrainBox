import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowCounterclockwise } from "react-icons/bs"

const Single400Page = () => {
  const data = {
    1: {
      video: "https://www.youtube.com/embed/4FIJYu_dwFk?si=rR9n0hKFYr0ZzOE_",
      description: "abcd",
      title: "abcd",
      subvideos: [
        "https://www.youtube.com/embed/OTUXWbSXWwI?si=ezxWIhahGAwfECKt",
        "https://www.youtube.com/embed/OTUXWbSXWwI?si=ezxWIhahGAwfECKt"
      ],
    },
    2: {
        video: "https://www.youtube.com/embed/4FIJYu_dwFk?si=rR9n0hKFYr0ZzOE_",
      description: "abcd",
      title: "abcd",
      subvideos: [
        "https://www.youtube.com/embed/OTUXWbSXWwI?si=ezxWIhahGAwfECKt",
        "https://www.youtube.com/embed/OTUXWbSXWwI?si=ezxWIhahGAwfECKt"
      ],
    },
    3: {
      video: "",
      description: "",
    },
    4: {
      video: "",
      description: "",
    },
  };

  const { id } = useParams();
  const pageData = data[id];

  if (!pageData) {
    <h2>Page Not Found</h2>;
  }
  return (
    <div className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
      <Link
          to="/all-courses/level100"
          className="font-semibold flex items-center gap-4 text-3xl text-primary hover:underline"
        >
            <BsArrowCounterclockwise />
          Back to Level 400 courses
        </Link>
        <div className="flex flex-col items-center justify-between">
          <div className="w-full mb-6">
            <h2 className="text-center font-semibold text-3xl">{pageData.title}</h2>
            <iframe
              className="w-full aspect-video"
              src={pageData.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex items-center w-full justify-between">
            <div className="w-[45%]">
                <h2>{pageData.description}
                </h2>
            </div>

            <div className="p-6">
            <h2>Critical Thinking</h2>
            <div className="flex flex-col gap-y-4">
              {pageData.subvideos.map((vid) => {
                return (
                  <iframe
                  className="w-full aspect-auto"
                    src={vid}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                );
              })}
            </div>
          </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Single400Page;
