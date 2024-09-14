import Title from "../../Common/Title";
import UserTable from "./UserTable";


const User = () => {
  const users = [
    { id: 1, name: 'John D', email: 'john@gmail.com', status: 'Paid', statusColor: 'green' },
    { id: 2, name: 'Yasin Ali', email: 'yasin@gmail.com', status: 'Unpaid', statusColor: 'red' },
    { id: 3, name: 'Khalid', email: 'khalid@gmail.com', status: 'Paid', statusColor: 'green' },
  ];

  const sections = ['Getting Started', 'Scaling Up', 'Home Program'];

  return (
    <div className="p-4 lg:p-8">
     <Title title={'List of Users'}/>
      <div className="space-y-12">
      <UserTable title={'Getting Started'}/>
      <UserTable title={'Scaling Up'}/>
      <UserTable title={'Home Program'}/>
      </div>
     
    </div>
  );
};

export default User;
