import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { BiSort } from "react-icons/bi";
import { LuFilter } from "react-icons/lu";

export default function Sales() {
  
  const data = [
    { date: "Jan", value: 90000 },
    { date: "Feb", value: 70000 },
    { date: "Mar", value: 50000 },
    { date: "Apr", value: 69000 },
    { date: "May", value: 60000 },
    { date: "Jun", value: 60000 },
    { date: "Jul", value: 60000 },
    { date: "Aug", value: 60000 },
    { date: "Sep", value: 60000 },
    { date: "Oct", value: 50000 },
    { date: "Nov", value: 80000 },
    { date: "Dec", value: 90000 },
  ];

  return (
    <>
      <section className="mt-2">
        <h1 className="mainText md:text-2xl font-bold md:ms-8">Sales Report</h1>
        {/*Chart  */}
        <div className="shadow-md p-2 md:p-4 rounded-xl mt-8 bg-white md:w-[95%] mx-auto  h-[350px] hover:shadow-2xl duration-300 transition-all">
          <div className="flex justify-end mb-2 text-sm font-semibold text-blue-600 gap-4">
            <span className="text-gray-400 cursor-pointer">1W</span>
            <span className="text-blue-600 border-b border-blue-600 cursor-pointer">
              1M
            </span>
            <span className="text-gray-400 cursor-pointer">3M</span>
            <span className="text-gray-400 cursor-pointer">1Y</span>
          </div>
          <ResponsiveContainer width="100%" height={305}>
            <AreaChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#02437B"
                fill="url(#colorValue)"
              />
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#02437B" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#02437B" stopOpacity={0.1} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
          {/* </div>  */}
        </div>

        {/*Table*/}

        <div className="flex items-center justify-between">
          <h1 className="mainText md:text-2xl font-bold md:ms-8 mt-8">Products Sold</h1>
          <div className="mt-8 md:pe-4 md:me-4">
            <button className="me-4 bg-white py-1 px-6 rounded-2xl mainText hover:bg-[#02437B] hover:!text-white duration-500 transition-all cursor-pointer">
              <div className="flex items-center">
                <BiSort className="text-xl me-2" />
                <span>Sort</span>
              </div>
            </button>
            <button className=" bg-white py-1 px-6 rounded-2xl mainText hover:bg-[#02437B] hover:!text-white duration-500 transition-all cursor-pointer">
              <div className="flex items-center">
                <LuFilter className="text-lg" />
                <span>Filter</span>
              </div>
            </button>
          </div>
        </div>

        {/*DeskTop  */}
        <div className="hidden md:block shadow-md w-[440px] h-[350px] rounded-xl mt-8 bg-white md:w-[95%] mx-auto md:h-[350px] hover:shadow-2xl duration-300 transition-all">
          <table className="w-full text-center text-sm  mainText">
            <thead className="text-xs border-b-1 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="border-b-1">
              <tr className="mainText">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">Electronics</td>
                <td className="px-6 py-4">ELEC-1001</td>
                <td className="px-6 py-4">12</td>
                <td className="px-6 py-4">1200$</td>
                <td className="px-6 py-4">20.02.2024</td>
              </tr>
              <tr className="mainText bg-[#D8E9F0]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">Electronics</td>
                <td className="px-6 py-4">ELEC-1001</td>
                <td className="px-6 py-4">12</td>
                <td className="px-6 py-4">1200$</td>
                <td className="px-6 py-4">20.02.2024</td>
              </tr>
              <tr className="mainText">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">Electronics</td>
                <td className="px-6 py-4">ELEC-1001</td>
                <td className="px-6 py-4">12</td>
                <td className="px-6 py-4">1200$</td>
                <td className="px-6 py-4">20.02.2024</td>
              </tr>
              <tr className="mainText bg-[#D8E9F0]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">Electronics</td>
                <td className="px-6 py-4">ELEC-1001</td>
                <td className="px-6 py-4">12</td>
                <td className="px-6 py-4">1200$</td>
                <td className="px-6 py-4">20.02.2024</td>
              </tr>
              <tr className="mainText">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">Electronics</td>
                <td className="px-6 py-4">ELEC-1001</td>
                <td className="px-6 py-4">12</td>
                <td className="px-6 py-4">1200$</td>
                <td className="px-6 py-4">20.02.2024</td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center gap-3 ps-8 font-bold mt-2 mainText">
            <h1>
              <GoChevronLeft className="text-xl" />
            </h1>
            <div className="px-1.5 text-white bg-[#02437B] rounded-md ">
              <h1>1</h1>
            </div>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
            <h1>....</h1>
            <h1>10</h1>
            <h1>
              <GoChevronRight className="text-xl" />
            </h1>
          </div>
        </div>

         {/* Mobile */}
         <div className="md:hidden my-20 shadow-md w-[450px] h-[350px] rounded-xl mt-8 bg-white md:w-[565px] md:h-[350px] hover:shadow-2xl duration-300 transition-all">
        <table className=" md:w-full text-center text-sm  mainText">
          <thead className="text-xs border-b-1 uppercase">
            <tr className='px-4 py-2 md:px-6 md:py-4'>
              <th scope="col" className="px-4 py-2 md:px-6 md:py-4">
                Product Name
              </th>
              <th scope="col" className="px-4 py-2 md:px-6 md:py-4">
                Quantity
              </th>
              <th scope="col" className="px-4 py-2 md:px-6 md:py-4">
                Date 
              </th>
              <th scope="col" className="px-4 py-2 md:px-6 md:py-4">
                price
              </th>
            </tr>
          </thead>
          <tbody className='border-b-1'>
            <tr className="mainText">
              <th scope="row" className="px-2 py-2 md:px-6 md:py-4 font-medium  whitespace-nowrap ">
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="mainText bg-[#D8E9F0]">
              <th scope="row" className="px-6 py-4  font-medium  whitespace-nowrap ">
                Macbook Pro
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="mainText">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Iphone 15 Pro Max
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="mainText bg-[#D8E9F0]">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Macbook Air
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="mainText">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Iphone 15
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Mobile
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
          </tbody>
        </table>
          {/* Footer Tabel */}
          <div className='flex items-center gap-3 ps-8 font-bold mt-2 mainText'>
            <h1><GoChevronLeft className='text-xl'/></h1>
            <div className='px-1.5 text-white bg-[#02437B] rounded-md '>
              <h1>1</h1>
            </div>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
            <h1>....</h1>
            <h1>10</h1>
            <h1><GoChevronRight className='text-xl'/></h1>
          </div>
         </div>


      </section>
    </>
  );
}
