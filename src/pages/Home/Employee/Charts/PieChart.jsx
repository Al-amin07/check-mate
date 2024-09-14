import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'In Progress', value: 400 },
  { name: 'To Do', value: 300 },
  { name: 'Completed', value: 300 },
  
];

const COLORS = ['#1D3322', '#3A6645', '#6D9978'];

const PieChartGraph = () => {
  return (
    <div className="w-full h-72"> {/* Set a fixed height to maintain proportions */}
      <ResponsiveContainer width="100%" height="100%"> {/* Makes chart responsive */}
        <PieChart>
          <Pie
            data={data}
            cx="50%"   
            cy="40%"   
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartGraph;
