import ri from "../../assets/ring/ri.png";


const RingCard = ({ num, title, desc }) => {
  return (
    <div className="w-[350px]  p-5">
      <div className="relative w-[114px] mx-auto">
        <img src={ri} alt="" className="h-[114px] w-full" />
        <h1 className="text-4xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute font-bold">
          {num}
        </h1>
      </div>
      <h1 className="text-2xl text-center font-bold  mb-2">{title}</h1>
      <p className="text-slate-600 text-center  text-sm">{desc}</p>
    </div>
  );
};

export default RingCard;
