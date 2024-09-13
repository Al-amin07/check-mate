import { Helmet } from 'react-helmet-async'


import AdminHome from './Admin/AdminHome'



const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
    <div>
     
    <div className="p-4 lg:p-8">
      {/* Statistics Card Section */}
    <AdminHome />

      {/* Task Table and Pie Chart */}
    
    </div>
    </div>
    </div>
  )
}

export default Home
