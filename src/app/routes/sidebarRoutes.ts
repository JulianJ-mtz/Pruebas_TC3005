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
    new SidebarRoute("Cliente Partner", "/dashboard/cliente-partner"),
    new SidebarRoute("Partner's List", "/dashboard/partners-list", [
        // new SidebarRoute("New Products", "products/new-product")
    ]),
    new SidebarRoute("Providers", "/dashboard/providers"),
    new SidebarRoute("Segment Configuration", "/dashboard/segment-configuration"),
    new SidebarRoute("Document Configuration", "/dashboard/document-configuration"),
    new SidebarRoute("Modales", "/dashboard/modalUpload"),
    new SidebarRoute("Partners", "/dashboard/partners"),
    new SidebarRoute("Document", "/dashboard/documents")
]
