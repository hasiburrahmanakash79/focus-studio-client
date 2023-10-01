const Success = () => {
  const getCurrentDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const currentDate = new Date().toLocaleDateString(undefined, options);
    return currentDate;
  };
  return (
    <div className=" bg-[url('https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')]  bg-fixed  bg-cover my-10">
      <div className="px-10 py-20 bg-black text-white bg-opacity-70 md:px-28">
        <div className="items-center grid-cols-2 gap-10 md:grid container mx-auto">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="rounded-xl"
              alt=""
            />
          </div>
          <div className="text-center md:text-left">
            <p className="mt-4 text-2xl md:text-4xl text-orange-500 font-bold">{getCurrentDate()}</p>
            <h1 className="my-3 text-2xl uppercase">
              Get in Touch with Us - Your Path to Online Exam Success!
            </h1>
            <p>
              Our online examination platform is committed to providing a
              seamless and user-friendly experience. If you have questions,
              feedback, or need assistance, please hesitate to contact us. We
              value your input and are here to help you excel in your exams.
              Reach out to our dedicated support team today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
