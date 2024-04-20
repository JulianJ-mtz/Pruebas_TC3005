export default function Configuration() {
    return (
      <main className="flex min-h-screen flex-col items-center normal p-20">
        <div className="border-b-2 border-black/10 dark:border-white/10 text-left w-[95%] pb-0 pt-20 justify-start"> 
            <h1 className="text-5xl text-blue-900 dark:text-white ">
                    {" "}
                    Segment Configuration{" "}
                </h1>
        </div>

        <div className="text-left w-[95%] pl-20 pt-20 justify-start"> 
            <h1 className="text-2xl text-blue-900 dark:text-white ">
                    {" "}
                    DTM - Date/Time Reference{" "}
            </h1>
        </div>

        <section className="mt-2 bg-sky-100 dark:bg-gray-900  rounded-xl w-[95%] justify-between sm:p-5">

          <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              Element
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Req
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Data Type
                          </th>
                          <th scope="col" className="px-6 py-3">
                              
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Min
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Max
                          </th>
                          <th scope="col" className="px-6 py-3">
                              
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              DTM01
                          </th>
                          <td className="px-6 py-4">
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 border border-gray-900 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">M <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg></button>
                          </td>
                          <td className="px-6 py-4">
                          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 border border-gray-900 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-7 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">ID<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg></button>
                          </td>
                          <td className="px-6 py-4">
                              
                          </td>
                          <td className="px-6 py-4">
                          <input type="text" className="bg-white border border-gray-900 text-gray-900 text-lg rounded-lg focus:ring-blue-500 block w-10 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                              
                          </td>
                          <td className="px-6 py-4">
                          <input type="text" className="bg-white border border-gray-900 text-gray-900 text-lg rounded-lg focus:ring-blue-500 block w-10 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                          </td>
                          <td className="px-6 py-4">
                            <svg className="fill-green-500" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"/></svg>
                          </td>
                      </tr>
                      <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              
                          </th>
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Code
                          </td>
                          <td className="px-6 py-4">
                          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 border border-gray-900 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-7 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">is one of<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg></button>
                          </td>
                          <td className="px-6 py-4">
                              $1999
                          </td>
                          <td className="px-6 py-4">

                          </td>
                          <td className="px-6 py-4">

                          </td>
                          <td className="px-6 py-4">
                          <svg className="fill-red-500" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22H14v-4h20v4z"/></svg>
                          </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              DTM02
                          </th>
                          <td className="px-6 py-4">
                          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 border border-gray-900 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">M <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg></button>
                          </td>
                          <td className="px-6 py-4">
                          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 border border-gray-900 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-7 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">DT<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg></button>
                          </td>
                          <td className="px-6 py-4">
                          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-400 bg-white hover:bg-gray-100 focus:ring-4 border border-gray-900 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-7 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Format<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg></button>
                          </td>
                          <td className="px-6 py-4">
                          <input type="text" className="bg-white border border-gray-900 text-gray-900 text-lg rounded-lg focus:ring-blue-500 block w-11 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="M" />
                          </td><td className="px-6 py-4">
                          <input type="text" className="bg-white border border-gray-900 text-gray-900 text-lg rounded-lg focus:ring-blue-500 block w-11 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="M"/>
                          </td>
                          <td className="px-6 py-4">
                            <svg className="fill-green-500" height="32" viewBox="0 0 48 48" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"/></svg>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>

        </section>
      </main>
    );
  }
