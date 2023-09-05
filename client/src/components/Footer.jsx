import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-20">
      <div className="max-w-[1444px] my-0 mx-auto px-7 text-white">
        <div className="flex flex-col justify-center lg:flex-row items-center lg:justify-between gap-12">
          <div className="w-[33%]">
            <div className="left__footer_hd">
              <h3>About</h3>
            </div>
            <div className="">
              <p>
                Established in 2023 in Ghana, BrainBox originated with the
                intention of facilitating self-directed learning for
                individuals, empowering them to engage in educational pursuits
                at their own convenience.
              </p>
            </div>
          </div>

          <div className="w-[33%]">
            <div className="footer__heading">
              <h3>Contact</h3>
            </div>
            <ul>
              <li>Accra</li>
              <li>Ghana</li>
              <li>University of Ghana</li>
              <li>Republic Of Ghana</li>
              <li>Email: BrainBox00@gmail.com</li>
              <li>+233 55 008 8395</li>
            </ul>
          </div>

          <div className="">
            <div className="footer__heading">
              <h3>Follow us</h3>
            </div>
            <ul>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">LinkedIn</a>
              </li>
              <li>
                <a href="/">Discord</a>
              </li>
              <li>
                <a href="/">Telegram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
