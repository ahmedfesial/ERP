import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { BiSort } from "react-icons/bi";
import { LuFilter } from "react-icons/lu";
import { BsPersonAdd } from "react-icons/bs";

export default function HumanResources() {
  return (
    <>
      <section>
        <div className="md:ms-8 font-semibold">
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

            {/* Button Add People */}
            <button className="py-2 bg-white px-4 mainText rounded-4xl cursor-pointer font-semibold hover:bg-[#02437B] hover:!text-white duration-500 transition-all">
              <div className="flex items-center">
                <BsPersonAdd className="me-2" />
                Add People
              </div>
            </button>
          </div>
        </div>

        {/*Desktop  */}
        <div className="hidden md:block shadow-md  sm:rounded-xl mt-8 bg-white w-[95%] mx-auto h-fit hover:shadow-2xl duration-300 transition-all">
          <table className="w-full text-center text-sm  mainText">
            <thead className="text-xs border-b-1 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Position
                </th>
                <th scope="col" className="px-6 py-3">
                  Start Date
                </th>
                <th scope="col" className="px-6 py-3">
                  salary
                </th>
              </tr>
            </thead>
            <tbody className="border-b-1">
              <tr className="mainText">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Ahmed Faisal
                </th>
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">Front-End</td>
                <td className="px-6 py-4">01.08.2025</td>
                <td className="px-6 py-4">1200$</td>
              </tr>
              <tr className="mainText bg-[#D8E9F0]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Ahmed Faisal
                </th>
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">Front-End</td>
                <td className="px-6 py-4">01.08.2025</td>
                <td className="px-6 py-4">1200$</td>
              </tr>
              <tr className="mainText ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Ahmed Faisal
                </th>
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">Front-End</td>
                <td className="px-6 py-4">01.08.2025</td>
                <td className="px-6 py-4">1200$</td>
              </tr>
              <tr className="mainText bg-[#D8E9F0]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Ahmed Faisal
                </th>
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">Front-End</td>
                <td className="px-6 py-4">01.08.2025</td>
                <td className="px-6 py-4">1200$</td>
              </tr>
              <tr className="mainText">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Ahmed Faisal
                </th>
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">Front-End</td>
                <td className="px-6 py-4">01.08.2025</td>
                <td className="px-6 py-4">1200$</td>
              </tr>
              <tr className="mainText bg-[#D8E9F0]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Ahmed Faisal
                </th>
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">Front-End</td>
                <td className="px-6 py-4">01.08.2025</td>
                <td className="px-6 py-4">1200$</td>
              </tr>
              <tr className="mainText">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Ahmed Faisal
                </th>
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">Front-End</td>
                <td className="px-6 py-4">01.08.2025</td>
                <td className="px-6 py-4">1200$</td>
              </tr>
              <tr className="mainText bg-[#D8E9F0]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Ahmed Faisal
                </th>
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">Front-End</td>
                <td className="px-6 py-4">01.08.2025</td>
                <td className="px-6 py-4">1200$</td>
              </tr>
              <tr className="mainText">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Ahmed Faisal
                </th>
                <td className="px-6 py-4">Software</td>
                <td className="px-6 py-4">Front-End</td>
                <td className="px-6 py-4">01.08.2025</td>
                <td className="px-6 py-4">1200$</td>
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

        <div className="md:hidden mt-4 md:ms-3 shadow-md w-[460px] overflow-hidden  h-[420px] rounded-xl bg-white md:w-[712px] md:h-[350px] hover:shadow-2xl duration-300 transition-all">
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
            <tbody className="border-b-1">
              <tr className="mainText">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Ahmed Faisal
                </th>
                <td className="px-6 py-4">Front-End Developer</td>
                <td className="px-6 py-4">01.08.2025</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="mainText bg-[#D8E9F0]">
                <th
                  scope="row"
                  className="px-6 py-4  font-medium  whitespace-nowrap "
                >
                  Mohamed Ali
                </th>
                <td className="px-6 py-4">Back-End Developer</td>
                <td className="px-6 py-4">20.05.2024</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="mainText">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Marwa Ahmed
                </th>
                <td className="px-6 py-4">UI/UX Desgin</td>
                <td className="px-6 py-4">30.04.2022</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="mainText bg-[#D8E9F0]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Nour Mostafa
                </th>
                <td className="px-6 py-4">IOS</td>
                <td className="px-6 py-4">15.03.2024</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="mainText">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  Hamza Ahmed
                </th>
                <td className="px-6 py-4">HR</td>
                <td className="px-6 py-4">10.02.2020</td>
                <td className="px-6 py-4">$2999</td>
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
      </section>
    </>
  );
}
