
const StatsCard = ({ title, count, icon: Icon }) => {
    return (
      <div className="bg-[#487f56] text-white  px-5 py-3 md:py-3 lg:py-4 rounded-3xl flex flex-col  justify-center gap-1">
        <div className="mb-2">
         <Icon className="md:h-16 h-12 w-12 md:w-16" />
        </div>
        <h4 className="text-lg">{title}</h4>
        <p className="text-xl md:text-2xl font-medium">{title === 'Total Amounts' ? `$ ${count}` : count}</p>
      </div>
    );
  };
  
  export default StatsCard;