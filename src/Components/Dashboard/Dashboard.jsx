import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Chart from './Chart';
import ChartWaheHouse from './ChartWareHouse';

const data = [
  { date: 18, value: 30000 },
  { date: 22, value: 75000 },
  { date: 26, value: 25000 },
  { date: 30, value: 65000 },
];



export default function Dashboard() {

  return <>
    <div className='mt-5'>
      {/* Header */}
      <h1 className='font-bold text-2xl mainText'>Welcome,Ahmed!</h1>  


      {/*Section Sales*/}
      <section>
      <p className='mt-8 font-bold md:text-2xl mainText md:ms-8'>Sales</p> 
      {/* Cards */}
      <div className='mainText mt-4 text-center grid-cols-1 ms-24 md:ms-0 md:flex justify-around'>

        {/*Card 1  */}
        <div className='w-[256px] py-4 px-16 bg-white flex-col rounded-2xl hover:shadow-2xl duration-300 transition-all'>
          <h1 className='font-semibold'>Total Earnings</h1>
          <h2 className='font-bold my-1.5'>100.000</h2>
          <span className='text-sm'>1 month indicator</span>
        </div>

        {/*Card 2  */}
        <div className='w-[256px] my-4 md:my-0 py-4 flex-col  bg-white rounded-2xl hover:shadow-2xl duration-300 transition-all'>
          <h1 className='font-semibold'>Total Number Of Products Sold</h1>
          <h2 className='font-bold my-1.5'>3400</h2>
          <span className='text-sm'>1 month indicator</span>
        </div>

        {/* Card 3 */}
        <div className='w-[256px] py-4  mb-4 md:my-0 bg-white flex-col rounded-2xl hover:shadow-2xl duration-300 transition-all'>
          <h1 className='font-semibold'>Best Selling Category</h1>
          <h2 className='font-bold my-1.5'>Electronics</h2>
          <span className='text-sm'>1 month indicator</span>
        </div>

        {/* Card 4 */}
        <div className='w-[256px] py-4  bg-white rounded-2xl flex-col hover:shadow-2xl duration-300 transition-all'>
          <h1 className='font-semibold'>Best Selling Product</h1>
          <h2 className='font-bold my-1.5'>Iphone 15 Pro</h2>
          <span className='text-sm'>1 month indicator</span>
        </div>

      </div>
      {/* End Cards*/}

      <div className='grid-cols-1 md:flex md:justify-around'>


        {/* Tabel */}
       <div className="shadow-md w-[440px] h-[350px] rounded-xl mt-8 bg-white md:w-[565px] md:h-[350px] hover:shadow-2xl">
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



        {/* Charts */}
      <div className='shadow-md p-2 md:p-4 w-[440px] h-[350px]  rounded-xl mt-8 bg-white md:w-[565px] md:h-[350px] hover:shadow-2xl'>

      <div className="flex justify-end mb-2 text-sm font-semibold text-blue-600 gap-4">
          <span className="text-gray-400 cursor-pointer">1W</span>
        <span className="text-blue-600 border-b border-blue-600 cursor-pointer">1M</span>
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
      </div>
      </section>

      {/*Section Human Resources */}
      <section>
        {/*Header */}
        <p className='mainText mt-8 font-bold md:text-2xl md:ms-8'>Human Resources</p>

        {/* main Div */}
        <div className='mt-8 grid-cols-1  md:flex md:justify-around'>

          {/* Table */}
          <div className="shadow-md w-[440px] overflow-hidden  h-[420px] rounded-xl bg-white md:w-[712px] md:h-[350px] hover:shadow-2xl duration-300 transition-all">
        <table className="w-full text-center text-sm  mainText">
          <thead className="text-xs border-b-1 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Start Date 
              </th>
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
            </tr>
          </thead>
          <tbody className='border-b-1'>
            <tr className="mainText">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Ahmed Faisal
              </th>
              <td className="px-6 py-4">
                Front-End Developer
              </td>
              <td className="px-6 py-4">
                01.08.2025
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="mainText bg-[#D8E9F0]">
              <th scope="row" className="px-6 py-4  font-medium  whitespace-nowrap ">
                Mohamed Ali
              </th>
              <td className="px-6 py-4">
                Back-End Developer
              </td>
              <td className="px-6 py-4">
                20.05.2024
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="mainText">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Marwa Ahmed
              </th>
              <td className="px-6 py-4">
                UI/UX Desgin
              </td>
              <td className="px-6 py-4">
                30.04.2022
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="mainText bg-[#D8E9F0]">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Nour Mostafa
              </th>
              <td className="px-6 py-4">
                IOS
              </td>
              <td className="px-6 py-4">
                15.03.2024
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="mainText">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Hamza Ahmed
              </th>
              <td className="px-6 py-4">
                HR
              </td>
              <td className="px-6 py-4">
                10.02.2020
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
          </tbody>
        </table>
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

          {/* Chart */}
          <div className='mt-6 md:mt-0 rounded-xl'>
              <Chart/>
          </div>


        </div>
      </section>

      {/*Warehouse */}
      <section className='mb-10'>
        
       {/*Header  */}
       <h1 className='mt-8 font-bold md:text-2xl mainText md:ms-8'>Warehouse</h1>       

        {/*Main Div  */}
      <div className='mt-8 grid-cols-1 md:flex md:justify-around'>
       {/* Table */}
       <div className="shadow-md  rounded-xl w-[450px] overflow-hidden h-fit bg-white md:w-[712px] md:h-[350px] hover:shadow-2xl duration-300 transition-all">
        <table className="w-full text-center text-sm  mainText">
          <thead className="text-xs border-b-1 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Product Code
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity 
              </th>
              <th scope="col" className="px-6 py-3">
                Supply history
              </th>
            </tr>
          </thead>
          <tbody className='border-b-1'>
            <tr className="mainText">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Iphone 14
              </th>
              <td className="px-6 py-4">
                ELEC-1001
              </td>
              <td className="px-6 py-4">
                15
              </td>
              <td className="px-6 py-4">
                20.11.2023
              </td>
            </tr>
            <tr className="mainText bg-[#D8E9F0]">
              <th scope="row" className="px-6 py-4  font-medium  whitespace-nowrap ">
                Samsung S24
              </th>
              <td className="px-6 py-4">
                ELEC-1005
              </td>
              <td className="px-6 py-4">
                20
              </td>
              <td className="px-6 py-4">
                20.05.2024
              </td>
            </tr>
            <tr className="mainText">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Iphone 16
              </th>
              <td className="px-6 py-4">
                ELEC-1008
              </td>
              <td className="px-6 py-4">
                10
              </td>
              <td className="px-6 py-4">
                30.04.2022
              </td>
            </tr>
            <tr className="mainText bg-[#D8E9F0]">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Iphone 13 Pro
              </th>
              <td className="px-6 py-4">
                ELEC-1003
              </td>
              <td className="px-6 py-4">
                26
              </td>
              <td className="px-6 py-4">
                15.03.2024
              </td>
            </tr>
            <tr className="mainText">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                Iphone 16 Plus
              </th>
              <td className="px-6 py-4">
                ELEC-1009
              </td>
              <td className="px-6 py-4">
                24
              </td>
              <td className="px-6 py-4">
                10.02.2020
              </td>
            </tr>
          </tbody>
        </table>
          <div className='flex items-center p-2 gap-3 ps-8 font-bold mt-2 mainText'>
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

       {/* Chart */}
        <div className='mt-6 mb-16 md:mt-0 md:mb-0 rounded-xl'>
              <ChartWaheHouse/>
        </div>  



      </div>
      </section>



    </div>
  </>
}
