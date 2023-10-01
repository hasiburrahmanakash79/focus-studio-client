const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center md:w-1/4 mx-auto border-b-4 my-5">
      <p className="text-orange-500 py-2">{subTitle}</p>
      <h2 className="text-3xl font-semibold uppercase py-2">{title}</h2>
    </div>
  );
};

export default SectionTitle;
