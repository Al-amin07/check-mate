import { Helmet } from 'react-helmet-async'


import AdminHome from './Admin/AdminHome'
import useAuth from '../../hooks/useAuth'
import EmployeeHome from './Employee/EmployeeHome';



const Home = () => {
  const { role } = useAuth();
  console.log(role)
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
    <div>
     
    <div className="p-4 lg:p-8">
      {/* Statistics Card Section */}
    {role ==='admin' && <AdminHome />}
    { role === 'employee' && <EmployeeHome />}

      {/* Task Table and Pie Chart */}
    
    </div>
    </div>
    </div>
  )
}

export default Home
