import React from "react";

const Company = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] my-0 mx-auto py-20 md:px-10 px-7">
        <div className="mx-auto text-center">
          <h2 className="text-4xl  mb-6">Company Information</h2>
          <div className="flex flex-col mx-auto w-full items-center justify-center">
            <div className="w-[700px] p-8">
              <div className="flex items-center w-full gap-8 ">
                <h4 className="text-2xl font-bold text-slate-950">
                  Company Name:
                </h4>
                <p>BrainBox</p>
              </div>
              <div className="flex items-center gap-8">
                <h4 className="text-2xl font-bold text-slate-950">
                  Company Location:
                </h4>
                <p>University Of Ghana Legon</p>
              </div>
              <div className="flex items-center gap-8">
                <h4 className="text-2xl font-bold text-slate-950">
                  Company Email:
                </h4>
                <p>
                  <span>
                    <a href="mailto:BrainBox00@gmail.com.">
                      BrainBox00@gmail.com
                    </a>
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-8">
                <h4 className="text-2xl font-bold text-slate-950">
                  Representatives:
                </h4>
                <p>Norh Abigi Bio, Alabi Samuel Bortey</p>
              </div>
              <div className="flex items-center gap-8">
                <h4 className="text-2xl font-bold text-slate-950">
                  Foundation Year:
                </h4>
                <p>March, 2023</p>
              </div>
              <div className="flex items-center gap-8">
                <h4 className="text-2xl font-bold text-slate-950">
                  Business Contents:
                </h4>
                <p>Providing free courses for students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
