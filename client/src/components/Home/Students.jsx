
import image1 from "../../assets/benedict.jpg";
import image2 from "../../assets/gifty.jpg";
import image3 from "../../assets/grow.jpg";

const Students = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] w-full my-0 mx-auto py-8 md:px-10 px-3">
        <div className="grid place-items-center gap-10 text-center w-[80%] mx-auto">
          <h1 className="text-3xl font-semibold">Popular Courses</h1>
          <h2 className="text-xl">
            Embark on a transformative learning experience with our sought-after
            courses, tailored to empower your educational journey.
          </h2>
          <div className="flex flex-col gap-28">
            <div className="flex items-center gap-16">
              <div className="w-[700px] border-4 h-[250px]">
                <img src={image1} alt="benedict" className="w-full" />
              </div>
              <div className="text-justify w-[95%] grid gap-y-12">
                <p>
                  I Never Thought Learning Could Be So Enjoyable. The Courses
                  Are Well-Structured, And The Combination Of Videos, Quizzes,
                  And Practical Exercises Keeps Me Engaged. BrainBoxs Commitment
                  To Fostering A Collaborative Learning Environment Is Truly
                  Commendable. Ive Found A Place Where My Passion For Learning
                  Is Nurtured.
                </p>
                <div>
                  <p>Benedict Owusu</p>
                  <p>Software Enginner</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center gap-16">
              <div className="w-[700px] border-4 h-[350px]">
                <img src={image1} alt="gifty" className="w-full h-[350px] object-cover" />
              </div>
              <div className="text-justify w-[95%] grid gap-y-12">
                <p>
                  I Can't Believe The Quality Of Education I'm Receiving Without
                  Having To Worry About Costs. The Courses Are Engaging, And The
                  Support From Both The Community And Instructors Is Incredible.
                  I've Grown Both Academically And Personally Through BrainBox,
                  And I'm Excited To See Where This Learning Journey Takes Me.
                </p>
                <div>
                  <p>Benedict Owusu</p>
                  <p>Software Enginner</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-16">
              <div className="w-[700px] border-4 h-[250px]">
                <img src={image3} alt="gifty" className="w-full" />
              </div>
              <div className="text-justify w-[95%] grid gap-y-8">
                <p>Helping People Grow Their Careers In Tech.</p>
                <p>
                  Wisdom Cannot Be Imparted. Wisdom That A Wise Man Attempts To
                  Impart Always Sounds Like Foolishness To Someone Else...
                  Knowledge Can Be Communicated, Butnot Wisdom. One Can Find It,
                  Live It, Do Wonders Through It, But One Cannot Communicate And
                  Teach It.
                </p>
               <button className="text-justify">Start Learning</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
