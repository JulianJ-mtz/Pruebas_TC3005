import { strict } from "assert";

export default function Orders() {
  type row = {
    Documento: string;
    Prioridad: string;
    Estado?: string;
  };

  const tablaRow: row[] = [
    {
      Documento: "EDI 860 Purchase Order Change Request",
      Prioridad: "Mandatory",
    },
    {
      Documento: "EDI 856 Ship Notice/Manifest",
      Prioridad: "Mandatory",
      Estado: "Completed",
    },
    {
      Documento: "EDI 855 Purchase Order Acknowledgment",
      Prioridad: "Optional",
      Estado: "Pending",
    },
    {
      Documento: "EDI 855 Purchase Order Acknowledgment",
      Prioridad: "Optional",
    },
    {
      Documento: "EDI 855 Purchase Order Acknowledgment",
      Prioridad: "Optional",
      Estado: "Pending",
    },
    {
      Documento: "EDI 855 Purchase Order Acknowledgment",
      Prioridad: "Optional",
      Estado: "Pending",
    },
    {
      Documento: "EDI 856 Ship Notice/Manifest",
      Prioridad: "Mandatory",
      Estado: "Completed",
    },
    {
      Documento: "EDI 856 Ship Notice/Manifest",
      Prioridad: "Mandatory",
      Estado: "Completed",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center p-24">
      <div className="border-b-2 border-black/10 dark:border-white/10 text-left w-[95%] pb-8 pt-20 justify-start">
        <h1 className="text-5xl text-black dark:text-white ">Amazon Partnership</h1>
      </div>
      <section className="mt-24 bg-sky-100 dark:bg-gray-900 rounded-xl w-[95%] justify-between sm:py-5">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="overflow-x-auto max-h-96">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                <thead className="text-x sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                  <tr>
                    <th scope="col" className="px-1 py-3 font-semibold text-sm">
                      Documento
                    </th>
                    <th scope="col" className="px-1 py-3 font-semibold text-sm">
                      Estado
                    </th>
                    <th scope="col" className="px-1 py-3 font-semibold text-sm">
                      Accion
                    </th>
                    <th scope="col" className="px-1 py-3 font-semibold text-sm">
                      Descargar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="px-10 py-6 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white">
                      EDI 850 Purchase Order
                    </td>
                    <td className="px-4 py-6"></td>
                    <td className="px-4 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                    <td className=" flex x-4 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center justify-center">
                      <button className="border rounded-2xl bg-cyan-600/70 hover:bg-white dark:hover:bg-cyan-900  dark:border-cyan-600  hover:border-cyan-600/70  transition-colors duration-150">
                        <div className="flex items-center px-3 py-1 text-white  hover:text-cyan-600/70 dark:hover:text-white/80 text-base ">
                          PO Test
                          <svg
                            className="h-7 w-7 pl-2 fill-current"
                            width="800px"
                            height="800px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 
                                      11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 
                                      11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z M3.75 15C3.75 14.5858 3.41422 14.25 3 
                                      14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 
                                      4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.651
                                      20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858
                                      20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 
                                      16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 
                                      18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                            />
                          </svg>
                        </div>
                      </button>
                    </td>
                  </tr>

                  {tablaRow.map((data, index: number) => (
                    <tr
                      key={index}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="px-10 py-5 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white  items-center">
                        <div className="flex items-center">
                          {data.Documento}
                          <p
                            className={`ml-4 font-semibold text-sm ${"rounded-xl px-2 border border-black/30"} ${
                              data.Prioridad === "Mandatory"
                                ? " bg-red-400 text-white"
                                : ""
                            } ${
                              data.Prioridad === "Optional"
                                ? " bg-gray-200 dark:bg-gray-500"
                                : ""
                            }`}
                          >
                            {data.Prioridad}
                          </p>
                        </div>
                      </td>

                      <td
                        className={`px-4 py-5 text-center items-center text-base dark:text-white`}
                      >
                        <div
                          className={`rounded-3xl ${
                            data.Estado ? "border-2 border-black" : ""
                          } ${
                            data.Estado === "Completed"
                              ? "border-green-700 text-base px-1 bg-green-300 text-black"
                              : ""
                          }
                          ${
                            data.Estado === "Pending"
                              ? "border-yellow-500 text-base px-1 bg-yellow-300 text-black"
                              : ""
                          }`}
                        >
                          {data.Estado}
                        </div>
                      </td>

                      <td className="px-4 py-5 text-center items-center text-base dark:text-white">
                        <button className="border rounded-2xl bg-cyan-600/70 hover:bg-white dark:hover:bg-cyan-900  dark:border-cyan-600  hover:border-cyan-600/70  transition duration-100">
                          <div className="px-4 py-1 text-white  hover:text-cyan-600/70 dark:hover:text-white/80 text-base ">
                            Validate
                          </div>
                        </button>
                      </td>
                      <td className=" flex x-4 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white items-center justify-center">
                        <button className="border rounded-2xl bg-cyan-600/70 hover:bg-white dark:hover:bg-cyan-900  dark:border-cyan-600  hover:border-cyan-600/70  transition duration-100">
                          <div className="flex items-center px-3 py-2 text-white  hover:text-cyan-600/70 dark:hover:text-white/80 text-base transition duration-100 ">
                            <svg
                              className="h-5 w-5 fill-current"
                              width="800px"
                              height="800px"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 
                                      11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 
                                      11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z M3.75 15C3.75 14.5858 3.41422 14.25 3 
                                      14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 
                                      4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.651
                                      20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858
                                      20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 
                                      16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 
                                      18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                              />
                            </svg>
                          </div>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
