

const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap justify-center py-10">
      {Array(12)
        .fill("")
        .map((_, index) => {
          return (
            <div
              key={index}
              className="animate-pulse w-72 h-[600px] rounded-xl bg-[#eeeeee] mx-4 my-2"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <figure className="h-[55%] bg-cover relative"></figure>
              <div
                className="animate-pulse rounded-xl bg-[#e3e2e2] shadow-2xl h-[45%] py-2 px-2"
                style={{ animationDelay: `${index * 0.05}s` }}
              ></div>
            </div>
          );
        })}
    </div>
  );
};

export default ShimmerUi;
