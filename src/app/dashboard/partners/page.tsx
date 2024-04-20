// PartnershipsSection.js
import React from 'react';

function PartnershipsSection() {
  return (
    <section className="text-black mt-20 bg-white p-8">
      <h2 className="text-5xl text-blue-900 mb-4 mx-10">Partnerships</h2>
      <hr className="mb-4 mx-10" />
      <div className="flex justify-end mb-4 mx-10">
        <button className="bg-white border border-cyan-500 text-cyan-500 px-4 py-2 rounded-lg">
          Add Partnership
        </button>
      </div>
      <div className="bg-sky-100 p-7 mx-10 rounded-xl">
        <div className="overflow-x-auto"> 
        <table className="w-full border-collapse bg-white">
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className='border-b border-black'>
                <th scope="col" className='border-r border-black px-6 py-3'>Partner</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* Fila 1 */}
            <tr className='border-b border-black'>
              <td className="text-black w-1/5 border-r border-black px-4 py-2">Partnership</td>
              <td className="flex justify-end px-4 py-2 text-center text-base dark:text-white">
                <div className='w-40 rounded-3xl border-2 border-black border-green-700 text-base px-1 bg-green-300 text-black'>Complete</div>
              </td>
              <td className="px-4 pt-1">
                  <button className="bg-cyan-500 text-white px-4 py-1 rounded-xl mr-2 float-right">View</button>
              </td>
            </tr>
            {/* Fila 2 */}
            <tr className='border-b border-black bg-gray-200'>
              <td className="text-black w-1/5 border-r border-black px-4 py-2">Partnership</td>
              <td className="flex justify-end px-4 py-2 text-center text-base dark:text-white">
                <div className='w-40 rounded-3xl border-2 border-black border-green-700 text-base px-1 bg-green-300 text-black'>Complete</div>
              </td>
              <td className="px-4 pt-1">
                <button className="bg-cyan-500 text-white px-4 py-1 rounded-xl mr-2 float-right">View</button>
              </td>
            </tr>
            {/* Fila 3 */}
            <tr className='border-t border-black'>
              <td className="text-black w-1/5 border-r border-black px-4 py-2">Partnership</td>
              <td className="flex justify-end px-4 py-2 text-center text-base dark:text-white">
                <div className='w-40 rounded-3xl border-2 border-black border-yellow-500 text-base px-1 bg-yellow-300 text-black'>In process</div>
              </td>
              <td className="px-4 pt-1">
                <button className="bg-cyan-500 text-white px-4 py-1 rounded-xl mr-2 float-right">View</button>
              </td>
            </tr>
            {/* Agregar más filas aquí si es necesario */}
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
}

export default PartnershipsSection;