import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

import { navLinks } from "@/lib/navLinks";
import Link from "next/link";

export function NavButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="border-green-600 bg-green-600" size="lg">
          <MenuIcon size={64} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 w-48">
        <DropdownMenuLabel>Menú de Navegación</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navLinks.map(({ id, href, label }) => (
            <Link href={href} key={id}>
              <DropdownMenuItem>{label}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
