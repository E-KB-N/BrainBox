

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] my-0 mx-auto py-20 md:px-10 px-7">
        <h1 className="text-primary text-3xl text-center font-bold mb-8">
          Frequently Asked Questions
        </h1>

        <div className="grid lg:grid-cols-2 gap-7">
          <div className="bg-gray-300 p-4 w-[95%]">
            <h2 className="font-semibold">How much is each course?</h2>
            <p>
              All of our courses are completely free of charge. We believe in
              making quality education accessible to everyone, regardless of
              financial limitations. Enjoy the benefits of learning without any
              financial burden.
            </p>
          </div>

          <div className="bg-gray-300 p-4 w-[95%]">
            <h2 className="font-semibold">How do I enroll in a course?</h2>
            <p>
              Enrolling in a course is easy! Simply visit the course page you're
              interested in and click on the "Enroll Now" button. You'll be
              guided through the enrollment process, where you can create an
              account and gain instant access to the course materials. Should
              you encounter any issues, our support team is here to assist you
              every step of the way.
            </p>
          </div>

          <div className="bg-gray-300 p-4 w-[95%]">
            <h2 className="font-semibold">Can I access the courses on a mobile device?</h2>
            <p>
              Absolutely! Our courses are optimized for various devices,
              including smartphones and tablets. This means you can conveniently
              access the course content wherever you are, making it easy to fit
              learning into your busy schedule. Whether you're on your daily
              commute or relaxing at home, you can make the most of your
              learning journey on the go.
            </p>
          </div>

          <div className="bg-gray-300 p-4 w-[95%]">
            <h2 className="font-semibold">Can I access the courses from anywhere?</h2>
            <p>
              Yes, absolutely! Our courses are available online, which means you
              can access the content from anywhere with an internet connection.
              Whether you're at home, in a cafe, or on the go, you can learn at
              your own pace and convenience. This flexibility allows you to
              integrate learning into your daily routine seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
