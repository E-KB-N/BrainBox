import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowCounterclockwise } from "react-icons/bs";

const SingleCoursePage = () => {
  const data = {
    1: {
      video: "https://www.youtube.com/embed/4FIJYu_dwFk?si=rR9n0hKFYr0ZzOE_",
      description: "2023 UGRC 150",
      subvideos: [
        "https://www.youtube.com/embed/OTUXWbSXWwI?si=ezxWIhahGAwfECKt",
        "https://www.youtube.com/embed/Reb9ISsRd0A?si=_rplTrfH4mHzvNhp",
        "https://www.youtube.com/embed/mrj81yjiOHY?si=dhaYKVdQ3vg3tzXg",
        "https://www.youtube.com/embed/vdFsY9YAn4Y?si=jmBCKgmd6l13ngO",
        "https://www.youtube.com/embed/bM0okF_w12g?si=EEXPMiSKR1LwIGNm",
      ],
    },
    2: {
      video: "https://www.youtube.com/embed/Df2aqGtJ1r8?si=l2KWEM0kvJ4pdXbG",
      description: "DCIT 101 Introduction to Computer Science",
      subvideos: [
        "https://www.youtube.com/embed/kJ3BOAqc7GU?si=hORDhPP9_1Ir3vnM",
        "https://www.youtube.com/embed/eMZssUbP9yU?si=AHEkFq1C2sLabNTy",
        "https://www.youtube.com/embed/-gDqCocTLbU?si=vgzbmz3KqeI9ePhO",
        "https://www.youtube.com/embed/RC3zXVnSr0g?si=K86_tSvlVlir5m1f",
        "https://www.youtube.com/embed/-TAdd5urJC4?si=_-jdBezPclpoyLBp",
      ],
    },
    3: {
      video: "https://www.youtube.com/embed/pnC0xobehvQ?si=QXFZsWKBhblv9kDS",
      description: "DCIT 103 Office Productivity Tools",
      subvideos: [
        "https://www.youtube.com/embed/kJ3BOAqc7GU?si=hORDhPP9_1Ir3vnM",
        "https://www.youtube.com/embed/eMZssUbP9yU?si=AHEkFq1C2sLabNTy",
        "https://www.youtube.com/embed/-gDqCocTLbU?si=vgzbmz3KqeI9ePhO",
        "https://www.youtube.com/embed/RC3zXVnSr0g?si=K86_tSvlVlir5m1f",
        "https://www.youtube.com/embed/-TAdd5urJC4?si=_-jdBezPclpoyLBp",
      ],
    },
    4: {
      video: "https://www.youtube.com/embed/4FIJYu_dwFk?si=rR9n0hKFYr0ZzOE_",
      description: "abcd",
      subvideos: [
        "https://www.youtube.com/embed/OTUXWbSXWwI?si=ezxWIhahGAwfECKt",
        "https://www.youtube.com/embed/OTUXWbSXWwI?si=ezxWIhahGAwfECKt",
      ],
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
          Back to Level 100 courses
        </Link>
        <div className="flex flex-col items-center justify-between">
          <div className="w-full mb-6">
            <h2 className="text-center font-semibold text-3xl">
              {pageData.description}
            </h2>
            <iframe
              className="w-full aspect-video"
              src={pageData.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          

            <div className="p-6">
              <h2>Playlist</h2>
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

export default SingleCoursePage;
