import RingCard from "./RingCard";
import v1 from "../../assets/ring/v1.svg";
import v2 from "../../assets/ring/v3.png";
const Rings = () => {
  return (
    <div className="mt-72  relative grid grid-cols-3 gap-6  mx-[90px]">
      <RingCard
        
        num={1}
        title={"Free Trail"}
        desc={
          "- Sign up for CheckMateGo and begin your 7-day trial today, giving you full access to all of our features!"
        }
      />
      <img src={v1}  className="w-[150px] absolute left-[300px] top-12 " alt="" />
      <RingCard
        num={2}
        title={"Take Photos"}
        desc={
          "- Launch a new project, bring your team on board, and begin uploading your photos. Feel free to capture everything you need—theres no limit on storage!"
        }
      />
      <img src={v2} className="w-[150px] absolute  right-[350px] top-12" alt="" />
      <RingCard
        num={3}
        title={"Live Project Updates"}
        desc={
          "Your Operations Manager can access a live feed of photos uploaded from all projects, including those from other teams"
        }
      />
    </div>
  );
};

export default Rings;
