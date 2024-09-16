
import Title from "../../Common/Title";
import PackageCard from "./PackageCard";
 
const AllSubs = ({packages}) => {
   
    return (
        <div className="bg-white mb-8">
          <Title title={'All Packages'}/>  
          <div className="px-8 space-y-16">
          {
            packages?.map((item, index) => <PackageCard  index={index} key={item?._id} item={item} />)
          }
          </div>
        </div>
    );
};

export default AllSubs;