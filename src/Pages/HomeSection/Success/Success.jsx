import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Success = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const getCurrentDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const currentDate = new Date().toLocaleDateString(undefined, options);
    return currentDate;
  };
  return (
    <div ref={ref} className=" bg-[url('https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')]  bg-fixed  bg-cover my-10">
      <div className="p-5 py-20 bg-black text-white bg-opacity-70 md:px-28">
        <div className="items-center grid-cols-2 gap-10 md:grid container mx-auto">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="rounded-xl"
              alt=""
            />
          </div>
          <div className="text-center md:text-left">
            <p className="mt-4 text-2xl md:text-4xl text-orange-500 font-bold">
              {getCurrentDate()}
            </p>
            <h1 className="my-3 text-2xl uppercase">
              Studio Focus: Illuminating Success in <br /> Online Photography Education
            </h1>
            <p>
              Studio Focus is a shining example of online photography
              excellence, redefining the way aspiring photographers master their
              craft. Our institute stands as a beacon of success, nurturing
              talent and shaping futures in the world of photography. With a
              commitment to quality education, Studio Focus empowers individuals
              to unlock their creative potential and embark on rewarding careers
              in photography.
            </p>
            <p className="mt-3">
              Our success is rooted in a comprehensive curriculum curated by
              industry experts, designed to provide a holistic understanding of
              photography techniques, equipment, and aesthetics. We leverage
              cutting-edge technology to deliver engaging and interactive online
              courses, making learning accessible to enthusiasts worldwide.
            </p>
          </div>
        </div>
        <div className="container mx-auto text-center">
        <div className="md:flex justify-around items-center md:pt-16">
            <div>
              <div className="text-5xl">
                {inView ? (
                  <CountUp
                    className="font-bold"
                    start={30}
                    end={251}
                    duration={7}
                  />
                ) : null}
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                University <br /> Scholars
              </div>
            </div>

            <div>
              <div className="text-5xl">
                {inView ? (
                  <CountUp
                    className="font-bold"
                    start={50}
                    end={410}
                    duration={7}
                  />
                ) : null}
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Professional <br /> Photographer
              </div>
            </div>

            <div>
              <div className="text-5xl ">
                {inView ? (
                  <CountUp
                    className="font-bold"
                    start={10}
                    end={190}
                    duration={7}
                  />
                ) : null}
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Worldwide <br /> Branches
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
