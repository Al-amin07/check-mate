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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          {/* <TaskTable /> */}
        </div>
        <div className="lg:col-span-1">
          {/* <PieChartPlaceholder /> */}
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Home
