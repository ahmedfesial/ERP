import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { BiSort } from "react-icons/bi";
import { LuFilter } from "react-icons/lu";
import { BsPersonAdd } from "react-icons/bs";



export default function Warehouse() {
  return <>
    <section>
            <div className=" md:ms-8 font-semibold">
              <div className="mt-8 md:pe-4 md:me-4 flex items-center justify-between">
                <div>
                  <button className="md:me-4 me-4 bg-white py-1 px-6 rounded-2xl mainText hover:bg-[#02437B] hover:!text-white duration-500 transition-all cursor-pointer">
                    <div className="flex items-center">
                      <BiSort className="text-xl me-2 " />
                      <span>Sort</span>
                    </div>
                  </button>
                  <button className="me-4 bg-white px-6 py-1  md:py-1 md:px-6 rounded-2xl mainText hover:bg-[#02437B] hover:!text-white duration-500 transition-all cursor-pointer">
                    <div className="flex items-center">
                      <LuFilter className="text-lg me-2" />
                      <span>Filter</span>
                  </div>
                  </button>
                </div>

                {/* Button Add Product */}
                <button className="py-2 bg-white px-4 mainText rounded-4xl cursor-pointer font-semibold hover:bg-[#02437B] hover:!text-white duration-500 transition-all">
                  <div className="flex items-center">
                    <BsPersonAdd className="me-2"/>
                    Add Product
                  </div>
                </button>

              </div>
            </div>

            {/* DeskTop */}
            <div className="hidden md:block shadow-md  sm:rounded-xl mt-8 bg-white w-[95%] mx-auto h-fit hover:shadow-2xl">
              <table className="w-full text-center text-sm  mainText">
                <thead className="text-xs border-b-1 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                     Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product code
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Supply history
                    </th>
                    <th scope="col" className="px-6 py-3">
                     location number
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="border-b-1">
                  <tr className="mainText">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      16 Pro Max
                    </th>
                    <td className="px-6 py-4">Mobile</td>
                    <td className="px-6 py-4">ELEC-1001</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20.02.2024</td>
                    <td className="px-6 py-4">Rəf 12, Sıra A, Yer 4</td>
                  </tr>
                  <tr className="mainText bg-[#D8E9F0]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      16 Pro Max
                    </th>
                    <td className="px-6 py-4">Mobile</td>
                    <td className="px-6 py-4">ELEC-1001</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20.02.2024</td>
                    <td className="px-6 py-4">Rəf 12, Sıra A, Yer 4</td>
                  </tr>
                  <tr className="mainText">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      16 Pro Max
                    </th>
                    <td className="px-6 py-4">Mobile</td>
                    <td className="px-6 py-4">ELEC-1001</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20.02.2024</td>
                    <td className="px-6 py-4">Rəf 12, Sıra A, Yer 4</td>
                  </tr>
                  <tr className="mainText bg-[#D8E9F0]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      16 Pro Max
                    </th>
                    <td className="px-6 py-4">Mobile</td>
                    <td className="px-6 py-4">ELEC-1001</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20.02.2024</td>
                    <td className="px-6 py-4">Rəf 12, Sıra A, Yer 4</td>
                  </tr>
                  <tr className="mainText">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      16 Pro Max
                    </th>
                    <td className="px-6 py-4">Mobile</td>
                    <td className="px-6 py-4">ELEC-1001</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20.02.2024</td>
                    <td className="px-6 py-4">Rəf 12, Sıra A, Yer 4</td>
                  </tr>
                  <tr className="mainText bg-[#D8E9F0]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      16 Pro Max
                    </th>
                    <td className="px-6 py-4">Mobile</td>
                    <td className="px-6 py-4">ELEC-1001</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20.02.2024</td>
                    <td className="px-6 py-4">Rəf 12, Sıra A, Yer 4</td>
                  </tr>
                  <tr className="mainText">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      16 Pro Max
                    </th>
                    <td className="px-6 py-4">Mobile</td>
                    <td className="px-6 py-4">ELEC-1001</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20.02.2024</td>
                    <td className="px-6 py-4">Rəf 12, Sıra A, Yer 4</td>
                  </tr>
                  <tr className="mainText bg-[#D8E9F0]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      16 Pro Max
                    </th>
                    <td className="px-6 py-4">Mobile</td>
                    <td className="px-6 py-4">ELEC-1001</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20.02.2024</td>
                    <td className="px-6 py-4">Rəf 12, Sıra A, Yer 4</td>
                  </tr>
                  <tr className="mainText">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      16 Pro Max
                    </th>
                    <td className="px-6 py-4">Mobile</td>
                    <td className="px-6 py-4">ELEC-1001</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20.02.2024</td>
                    <td className="px-6 py-4">Rəf 12, Sıra A, Yer 4</td>
                  </tr>
                  <tr className="mainText bg-[#D8E9F0]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      16 Pro Max
                    </th>
                    <td className="px-6 py-4">Mobile</td>
                    <td className="px-6 py-4">ELEC-1001</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20.02.2024</td>
                    <td className="px-6 py-4">Rəf 12, Sıra A, Yer 4</td>
                  </tr>
             
                  
               
                </tbody>
              </table>
              <div className="flex items-center gap-3 ps-8 font-bold mt-2 mainText p-3">
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
            <div className="md:hidden mt-4 md:mt-0 my-24 shadow-md  rounded-xl w-[450px] overflow-hidden h-fit bg-white md:w-[712px] md:h-[350px] hover:shadow-2xl duration-300 transition-all">
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
    </section>
  </>
}
