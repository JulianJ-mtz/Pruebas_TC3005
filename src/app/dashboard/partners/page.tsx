// PartnershipsSection.js
import React from 'react';

function PartnershipsSection() {
  return (
    <section className="text-black mt-20 bg-white p-8">
      <h2 className="text-xl font-bold mb-4 mx-10">Partnerships</h2>
      <hr className="mb-4 mx-10" />
      <div className="flex justify-end mb-4 mx-10">
        <button className="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-lg">
          Add Partnership
        </button>
      </div>
      <div className="bg-blue-200 p-7 mx-10">
        <div className="overflow-x-auto"> 
        <table className="w-full border-collapse bg-white">
          <tbody>
            {/* Fila 1 */}
            <tr className='border-b border-black'>
              <td className="text-black w-1/5 border-r border-black px-4 py-2">Partnership</td>
              <td className="text-black w-4/5 text-right px-4 py-2">Complete</td>
              <td className="flex justify-end px-4">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-lg mr-2">View</button>
              </td>
            </tr>
            {/* Fila 2 */}
            <tr className='border-b border-black'>
              <td className="text-black w-1/5 border-r border-black px-4 py-2">Partnership</td>
              <td className="text-black w-4/5 text-right px-4 py-2">Complete</td>
              <td className="flex justify-end px-4">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-lg mr-2">View</button>
              </td>
            </tr>
            {/* Fila 3 */}
            <tr className='border-t border-black'>
              <td className="text-black w-1/5 border-r border-black px-4 py-2">Partnership</td>
              <td className="text-black w-4/5 text-right px-4 py-2">In Process</td>
              <td className="flex justify-end px-4">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-lg mr-2">View</button>
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