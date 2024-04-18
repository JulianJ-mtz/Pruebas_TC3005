import { routes } from "@/app/routes/sidebarRoutes";

export default function Sidebar() {
  return (
    <div className="">
      <aside className=" top-0 left-0  py-2 z-40 w-60 h-screen pt-16 transform -translate-x-full md:translate-x-0 max-md:hidden transition-opacity duration-500 opacity-0 md:opacity-100">
        <div className="overflow-y-auto rounded-lg ms-2 h-full bg-sky-100 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className=" content-center">
            {routes.map((componente, index: number) => (
              <li key={index}>
                <a
                  href={componente.ruta}
                  className="flex {border-t border-white/20} p-5 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ml-3">{componente.nombre}</span>
                </a>
                {componente.children && (
                  <ul className="space-y-2 ps-4">
                    {componente.children.map((child, childKey: number) => (
                      <li key={childKey}>
                        <a
                          href={child.ruta}
                          className="flex items-center p-5 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <span className="ml-3 opacity-60">
                            {child.nombre}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
