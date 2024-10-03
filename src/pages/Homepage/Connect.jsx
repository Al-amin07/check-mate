import i1 from "../../assets/connect/icon1.png";
import i2 from "../../assets/connect/icon2.png";
import i3 from "../../assets/connect/icon5.png";
import i4 from "../../assets/connect/icon4.png";
import img1 from "../../assets/connect/Rectangle 13.png";
import img2 from "../../assets/connect/Rectangle 14.png";
import img3 from "../../assets/connect/Rectangle 15.png";
import img4 from "../../assets/connect/Rectangle 16.png";
import img5 from "../../assets/connect/icon6.png";
import img6 from "../../assets/connect/Rectangle 18.png";
const Connect = () => {
  return (
    <div className="container mx-auto px-1 md:px-3 lg:px-6 ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">Connect With us</h2>
      <p className="w-[450px] mx-auto text-center mt-1 mb-5">
        Stay connected and engage with us on social media! Follow us for the
        latest updates, tips, and community interactions.
      </p>
      <div className=" flex  justify-center items-center gap-4">
        <img className="h-[40px] " src={i1} alt="" />
        <img className="h-[40px] " src={i2} alt="" />
        <img className="h-[40px] " src={i3} alt="" />
        <img className="h-[40px] " src={i4} alt="" />
      </div>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <img src={img1} className=" h-[250px] sm:h-[350px] object-fill  md:h-full w-full"  alt="" />
        <img src={img2} className="h-[250px] sm:h-[350px] object-fill  md:h-full w-full" alt="" />
        <img src={img3} className="h-[250px] sm:h-[350px] object-fill  md:h-full w-full" alt="" />
        <img src={img4} className="h-[250px] sm:h-[350px] object-fill  md:h-full w-full" alt="" />
        <img src={img5} className="h-[250px] sm:h-[350px] object-fill  md:h-full w-full" alt="" />
        <img src={img6} className="h-[250px] sm:h-[350px] object-fill  md:h-full w-full" alt="" />
      </div>
    </div>
  );
};

export default Connect;
