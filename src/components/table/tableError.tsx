export default function TableErrors() {
    return(


<div className="relative  rounded-lg overflow-x-auto w-full">
    <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Error Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Error Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Error1
                </th>
                <td className="px-6 py-4">
                    Error description
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Error2
                </th>
                <td className="px-6 py-4">
                    Error description
                </td>
            </tr><tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Error3
                </th>
                <td className="px-6 py-4">
                    Error description
                </td>
            </tr>
        </tbody>
    </table>
</div>

    )
}