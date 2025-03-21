interface NavLink {
  id: number;
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    href: "/",
    label: "Inicio",
  },
  {
    id: 2,
    href: "/servicio",
    label: "Sobre el servicio",
  },
  {
    id: 3,
    href: "/menu",
    label: "Menú",
  },
];
