const NumberCircle = ({ number, description }) => {
    return (
      <div className="flex flex-col items-center mx-8">
        <div className="rounded-full border-2 border-gray-500 h-48 w-48 flex items-center justify-center ">
          <span className="text-6xl font-bold">{number}</span>
        </div>
        <span className="mt-6 desc text-xl">{description}</span>
      </div>
    );
  };
  
  export default NumberCircle;