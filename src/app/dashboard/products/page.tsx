export default function Products() {

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
                    Partner's List{" "}
                </h1>
            </div>

            <section className="flex flex-col dark: rounded-xl w-[95%] justify-between sm:py-5">
                <button type="button" className="self-end border-2 border-cyan-500 text-cyan-500 bg-white hover:bg-neutral-100 font-medium rounded-lg text-xs w-36 px-2 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add partner +</button>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
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
        </div >
    );
}
