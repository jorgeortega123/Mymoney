import React from "react";

export default function TableFromDebts(debtsNames) {
  const debts = debtsNames.debtsNames.debts;
  return (
    <div class="p-2 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-3 py-1">
              name
            </th>
            <th scope="col" class="px-3 py-1">
              relationship
            </th>
            <th scope="col" class="px-3 py-1">
              mount to pay
            </th>
            <th scope="col" class="px-3 py-1">
              paid
            </th>
          </tr>
        </thead>
        <tbody>
          {debts.map((debtsAccounts) => {
            return (
              <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  class="px-3 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {debtsAccounts.name}
                </th>
                <td class="px-2 py-1">{debtsAccounts.relationship}</td>
                <td class="px-2 py-1">{debtsAccounts.mount.toFixed(2) }</td>
                <td class="px-2 py-1">{debtsAccounts.paid.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex capitalize">
        <button className="mt-2 w-full h-9  px-5  mb-2 font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-200 hover:text-blue-800 focus:z-10 focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
         Pay
        </button>
        <button className="mt-2 w-full h-9  px-5  mb-2 font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-200 hover:text-blue-800 focus:z-10 focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
         Weekly
        </button>
      </div>
    </div>
  );
}
