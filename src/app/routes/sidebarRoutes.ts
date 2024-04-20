interface RoutesSidebar {
    nombre: string;
    ruta: string;
    children?: RoutesSidebar[];
}

class SidebarRoute implements RoutesSidebar {
    nombre: string;
    ruta: string;
    children?: RoutesSidebar[];

    constructor(
        _nombre: string,
        _ruta: string,
        _children?: RoutesSidebar[],
    ) {
        this.nombre = _nombre;
        this.ruta = _ruta;
        this.children = _children || [];
    }
}

export const routes: RoutesSidebar[] = [
    new SidebarRoute("Orders", "/dashboard/orders"),
    new SidebarRoute("Products", "/dashboard/products", [
        new SidebarRoute("New Products", "products/new-product")
    ]),
    new SidebarRoute("Providers", "/dashboard/providers"),
    new SidebarRoute("Partners", "/dashboard/partners")
]
