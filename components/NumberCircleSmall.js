const NumberCircleSmall = ({ number, description }) => {
  return (
    <div className="flex flex-col items-center mx-8">
      <div className="rounded-full h-24 w-24 flex items-center justify-center gradient_fill">
        <span className="text-3xl font-bold text-slate-100">{number}</span>
      </div>
      <span className="mt-6 text-base desc">{description}</span>
    </div>
  );
};

export default NumberCircleSmall;
