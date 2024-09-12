
const StatsCard = ({ title, count, icon: Icon }) => {
    return (
      <div className="bg-[#487f56] text-white  px-5 py-4 rounded-3xl flex flex-col  justify-center gap-1">
        <div className="mb-2">
         <Icon className="h-16 w-16" />
        </div>
        <h4 className="text-lg">{title}</h4>
        <p className="text-2xl font-medium">{count}</p>
      </div>
    );
  };
  
  export default StatsCard;