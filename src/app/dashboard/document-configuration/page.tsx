import Image from "next/image";

export default function Page() {
  return (
  <main>
    <header>
    <nav className="flex flex-wrap justify-between items-center px-8 py-2 bg-sky-200">
            <a href="#" className="flex items-center">
                <Image
                    src="/Flexlogic_Logo.png"
                    width={512}
                    height={127}
                    className="mr-3 h-6 w-full sm:h-9"
                    alt="Flexlogic Logo"
                />
          </a>
        <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-400 rounded-lg" aria-controls="navbar-hamburger" aria-expanded="false">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
    </nav>
  </header>

  <div className="mx-40 my-14">
    <h1 className="text-black text-4xl font-sans">
      Document Configuration
    </h1>

    <hr className="h-px my-8 bg-cyan-500 border-0"></hr>

    <div className="flex">
      <h1 className="text-black text-lg px-4 py-2">
        Amazon - EDI 855
      </h1>

      <button type="button" className="ml-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:bg-gray-700">
        Add Loop +
      </button>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:bg-gray-700">
        Add Segment +
      </button>
    </div>

    <div className="bg-sky-200 p-8 rounded-xl">
      <div className="rounded-xl relative overflow-x-auto">
        <table className="border-spacing-y-0.5 border-separate w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-white">
                <tr>
                    <th scope="col" className="px-6 py-3">
                      Element ID - Element Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Req
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Max
                    </th>
                    <th scope="col">
                    </th>
                    <th scope="col">
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className ="shadow-lg text-black border border-solid border-gray-400 bg-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                      Element 
                      <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>
                    </th>
                    <td className="px-6 py-4">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className ="shadow-lg text-black border border-solid border-gray-400 bg-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                      Req 
                      <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>
                    </td>
                    <td className="px-6 py-4">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className ="shadow-lg text-black border border-solid border-gray-400 bg-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                      Max 
                      <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </button>
                    </td>
                    <td>
                    <button>
                      <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd"/>
                      </svg>
                    </button>
                    </td>
                    <td>
                      <button className="editbtn">
                      <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>

                      </button>
                      </td>

                </tr>
            </tbody>
        </table>
      </div>
    </div>

    <div className="py-8 flex justify-center">
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        Save Document
      </button>
    </div>

  </div>
</main>
  );
}