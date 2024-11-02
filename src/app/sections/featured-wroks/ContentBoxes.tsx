const featuredWorksContent = {
  smHead1: "Featured Works",
  lgHead2: "Designing Dashboards",
  p1: "2020",
  p2: "Dashboard",
  p3:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit" +
    "officia consequat duis enim velit mollit. Exercitation veniam consequat " +
    "sunt nostrud amet.",
};
const FeaturedWorksBoxes = () => {
  return (
    <>
      <div className="mr-6">
        <h1 className="text-black font-semibold font-heebo text-lg">
          {featuredWorksContent.lgHead2}
        </h1>
        <div className="flex justify-normal">
          <span className="text-white font-bold font-heebo bg-heroButtonPink rounded-xl px-4 py-0">
            {featuredWorksContent.p1}
          </span>
          <h5 className="text-gray-700 ml-3">{featuredWorksContent.p2}</h5>
        </div>
        <p className="text-gray-700 font-heebo">{featuredWorksContent.p3}</p>
      </div>
    </>
  );
};

export default FeaturedWorksBoxes;
