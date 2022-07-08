import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function AddIncomingCash(allResources) {
     const [resources, setresources] = useState([])
     const [pageLoad, setpageLoad] = useState(false)
     useEffect(() => {
          const array = []
       const data =() => { 
          array.push({ "title": "patrimonio", value:0, cost: 0, max: 0 })
          allResources.allResources.cost[0].fixed.map(e => array.push(e) )
          allResources.allResources.cost[0].variables.map(b => array.push(b) )
          array.push(allResources.allResources.savings[0])
          console.log(array)
          setresources(array)
          setpageLoad(true)
     }
     data()
     
     console.log(resources)
     }, [])
     
   

  return (
    <div className="p-3 border rounded-xl bg-slate-100 ">
      <p>Add an incoming cash</p>
      <div className="flex items-center space-x-2 ">
      <div className="mr-1 flex items-center border rounded-lg border-slate-400 focus:ring-1 focus:ring-v ">
              <p className="ml-1 text-green-600">$</p>
            <input
              type="number"
              className=" grow  w-[55px] p-[2px] outline-none bg-transparent  "
              id=""
            />
            </div>


        <p className="">Destiny to: </p>
        <select name="" id="" className="grow">
        {pageLoad ? resources.map((e) => {
                return (
                  <option id={e.title + "Id"} value={e.title}>
                    {e.title}
                  </option>
                );
              }) : <option>Loading...</option> }
        </select>
      </div>

      <button className="mt-2 w-full h-9  px-5  mb-2 font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-200 hover:text-blue-800 focus:z-10 focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        pay weekly
      </button>

    </div>
  );
}
