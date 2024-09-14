
import Title from "../../Common/Title";
import PackageCard from "./PackageCard";
const packages = [
    {
        _id:1,
      name: "Scaling Up",
      price: "$20.00",
      duration: "30 days",
      details: [
        "Unlimited Technicians and Admin",
        "Route Builders",
        "50 Photos per Visit",
        "Upload Photos",
        "Unlimited Admin",
        "Unlimited Technicians"
      ]
    },
    {
        _id:2,
      name: "Business Pro",
      price: "$50.00",
      duration: "60 days",
      details: [
        "Unlimited Technicians and Admin",
        "Custom Route Builders",
        "100 Photos per Visit",
        "Upload and Share Photos",
        "Priority Support",
        "Unlimited Technicians"
      ]
    },
    {
        _id:3,
      name: "Enterprise",
      price: "$100.00",
      duration: "90 days",
      details: [
        "Unlimited Technicians, Admin, and Sub-Accounts",
        "Advanced Route Builders",
        "Unlimited Photos per Visit",
        "Cloud Photo Storage",
        "Dedicated Support Team",
        "Complete Customization"
      ]
    }
  ];
  
const AllSubs = () => {
    
    return (
        <div className="bg-white mb-8">
          <Title title={'All Packages'}/>  
          <div className="px-8 space-y-16">
          {
            packages.map((item, index) => <PackageCard  index={index} key={item?._id} item={item} />)
          }
          </div>
        </div>
    );
};

export default AllSubs;