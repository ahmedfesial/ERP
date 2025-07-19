import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: "Marketing", value: 186 },
  { name: "Proqram Təminatı", value: 75 },
  { name: "Digər", value: 37 },
];

const COLORS = ["#003366", "#0088CC", "#B4E0F8"];

const totalEmployees = data.reduce((acc, item) => acc + item.value, 0);

export default function Chart() {


  return <>
    <div className="bg-white rounded-2xl w-[440px] h-[350px] shadow-md pb-2 px-4  md:max-w-[400px] border md:h-[350px] border-blue-200 hover:shadow-2xl duration-300 transition-all">
      <div className="flex justify-center items-center ">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute text-center text-gray-700 font-semibold">
          <div className="text-sm">Total Number</div>
          <div className="text-sm">Of Employees</div>
          <div className="text-2xl font-bold">{totalEmployees}</div>
        </div>
      </div>

      <table className="w-[85%] mx-auto text-sm text-left mt-2">
        <thead className="text-gray-500">
          <tr className='border-b-1 pb-2'>
            <th>Department</th>
            <th>Number Of</th>
            <th className='ps-4'>%</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {data.map((d, index) => {
            const percent = ((d.value / totalEmployees) * 100).toFixed(1);
            return (
              <tr key={index} >
                <td className="flex items-center gap-2 py-2">
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  {d.name}
                </td>
                <td className='font-bold pe-6'>{d.value}</td>
                <td className='font-bold'>{percent}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </>
}
