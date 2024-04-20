export default function Partner_List(){
    type row = {
        Partner: string;
        Delimeters: string;
        EDI_Versions: string;
        EOL: string;
        Connection_Type: string;
    }

    let rows: row[] = [
        {
            Partner: "Amazon",
            Delimeters: "Delimeters",
            EDI_Versions: "EDI Versions",
            EOL: "EOL",
            Connection_Type: "Connection_Type",
        },
        {
            Partner: "Amazon",
            Delimeters: "Delimeters",
            EDI_Versions: "EDI Versions",
            EOL: "EOL",
            Connection_Type: "Connection_Type",
        },
        {
            Partner: "Amazon",
            Delimeters: "Delimeters",
            EDI_Versions: "EDI Versions",
            EOL: "EOL",
            Connection_Type: "Connection_Type",
        },
        {
            Partner: "Amazon",
            Delimeters: "Delimeters",
            EDI_Versions: "EDI Versions",
            EOL: "EOL",
            Connection_Type: "Connection_Type",
        },
        {
            Partner: "Amazon",
            Delimeters: "Delimeters",
            EDI_Versions: "EDI Versions",
            EOL: "EOL",
            Connection_Type: "Connection_Type",
        },
        {
            Partner: "Amazon",
            Delimeters: "Delimeters",
            EDI_Versions: "EDI Versions",
            EOL: "EOL",
            Connection_Type: "Connection_Type",
        },

    ]

    return (
        <div className="flex flex-col items-center p-12">
            <div className="border-b-2 border-cyan-500 dark:border-white/10 text-left w-[95%] pb-8 pt-20 justify-start">
                <h1 className="text-5xl text-blue-950 dark:text-white ">
                    {" "}
                    Partner's List
                </h1>
            </div>

            <section className="flex flex-col dark: rounded-xl w-[95%] justify-between sm:py-5">
                <button type="button" className="self-end border-2 border-cyan-500 text-cyan-500 bg-white hover:bg-neutral-100 font-medium rounded-lg text-xs w-36 px-2 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add partner +</button>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-cyan-500 dark:text-gray-400">
                        <thead className="text-xs text-white uppercase bg-cyan-500 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Partners
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delimeters
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    EDI Versions
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    EOL
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Connection Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((data, index: number) => (
                                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b border-blue-950 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data.Partner}
                                    </th>
                                    <td className="px-6 py-4">
                                        {data.Delimeters}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.EDI_Versions}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.EOL}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.Connection_Type}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h.01m6 0h.01m5.99 0h.01" />
                                        </svg>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </section >
            <div className="flex flex-col dark: rounded-xl w-[95%] justify-between sm:py-5">
                <nav className="flex items-center flex-column p-4 bg-white rounded-lg h-4 border border-cyan-500" aria-label="Table navigation">
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg className="w-6 h-6 text-cyan-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0V6Z" clip-rule="evenodd" />
                    </svg>
                    </a>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg className="w-6 h-6 text-cyan-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clip-rule="evenodd" />
                    </svg>

                    </a>
                    <span className="text-sm font-normal text-center text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"><input type="number" id="small-input" className="p-2 text-gray-900 w-10 h-6 rounded-lg bg-gray-50 text-xs border-cyan-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input><span className="font-semibold text-cyan-500 dark:text-white">/ 20</span></span>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg className="w-6 h-6 text-cyan-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd" />
                    </svg>
                    </a>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><svg className="w-6 h-6 text-cyan-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M17 6a1 1 0 1 0-2 0v4L8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8L15 14v4a1 1 0 1 0 2 0V6Z" clip-rule="evenodd" />
                    </svg>
                    </a>
                </nav>
            </div>
        </div >
    );
}