import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: "Electronics", value: 186 },
  { name: "Clothing", value: 75 },
  { name: "Cosmetics", value: 37 },
];

const COLORS = ["#FF5E22", "#0088CC", "#FFAB7D"];

const totalEmployees = data.reduce((acc, item) => acc + item.value, 0);

export default function ChartWaheHouse() {


  return <>
    <div className="bg-white rounded-2xl shadow-md pb-2 px-4 w-[450px] h-[350px] md:max-w-[400px] border md:h-[350px] border-blue-200 hover:shadow-2xl duration-300 transition-all">
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
        
      </div>

      <table className=" w-[80%] mx-auto text-sm mt-2 mainText">
        <thead className="text-gray-500">
          <tr className='flex justify-between items-center border-b-1 pb-2'>
            <th>Category</th>
            <th className='me-4'>%</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => {
            const percent = ((d.value / totalEmployees) * 100).toFixed(1);
            return (
              <tr key={index} className='flex items-center justify-between'>
                <td className="flex items-center gap-2 py-2">
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  {d.name}
                </td>
                <td>{percent}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </>
}
