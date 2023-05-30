const bgColorClass = (number) => {
  if (number < 50) return "bg-tds-1";
  else if (number < 100) return "bg-tds-2";
  else if (number < 200) return "bg-tds-3";
  else if (number < 300) return "bg-tds-4";
  else if (number < 400) return "bg-tds-5";
  else if (number < 500) return "bg-tds-6";
  else return "bg-tds-7";
};

const textColorClass = (number) => {
  if (number < 50) return "text-blue-500";
  else return "text-white";
};

const TdsCircleSmall = ({ number, description }) => {
  const thisBgColor = bgColorClass(number);
  const thisTextColor = textColorClass(number);
  return (
    <div className="flex flex-col items-center mx-8">
      <div
        className={`rounded-full h-24 w-24 flex items-center justify-center ${thisBgColor}`}
      >
        <span className={`text-3xl font-bold ${thisTextColor}`}>{number}</span>
      </div>
      <span className="mt-6 text-base desc">{description}</span>
    </div>
  );
};

export default TdsCircleSmall;
