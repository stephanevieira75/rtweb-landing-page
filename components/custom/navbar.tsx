"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useMediaQuery } from "@/hooks/use-media-query";
import { RTWebLogo } from "@/components/custom/rtweb-logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronUp, Menu, X } from "lucide-react";
import { Item, ItemContent, ItemHeader } from "@/components/ui/item";
import { CTAButton } from "./cta-button";

const menuItems = [
  {
    name: "Qui sommes-nous ?",
    href: "/#team",
  },
  {
    name: "Nos services",
    href: "/#services",
  },
  {
    name: "Nos solutions",
    href: "/#products",
    submenu: [
      {
        name: "Glyph.chat",
        description:
          "Boostez votre support client avec notre chatbot IA personnalisable.",
        href: "/#glyph",
      },
      {
        name: "Fidarna",
        description:
          "Le moteur de recherche intelligent pour trouver un logement en Algérie.",
        href: "/#fidarna",
      },
    ],
  },
];

type SubmenuItem = {
  name: string;
  description: string;
  href: string;
  target?: string;
};

type MenuItem = {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
};

function ListItem({
  name,
  children,
  href,
  target,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & SubmenuItem) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} target={target}>
          <div className="text-sm leading-none font-medium">{name}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function CollapsibleMenuItem({ item }: { item: MenuItem }) {
  return (
    <Collapsible>
      <Item variant="outline" className="p-8 bg-gray-50">
        <ItemContent>
          <ItemHeader className="text-lg font-bold">
            {item.submenu ? (
              <>
                {item.name}
                <CollapsibleTrigger>
                  <ChevronUp size={24} />
                </CollapsibleTrigger>
              </>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </ItemHeader>
        </ItemContent>
      </Item>

      <CollapsibleContent className="flex flex-col gap-2 mt-2">
        {item.submenu &&
          item.submenu.map((subitem) => (
            <Item key={subitem.name} variant="outline" className="p-8">
              <Link href={subitem.href} target={subitem.target}>
                <ItemHeader className="text-lg font-bold">
                  {subitem.name}
                </ItemHeader>
                <ItemContent>
                  <span className="text-sm text-muted-foreground">
                    {subitem.description}
                  </span>
                </ItemContent>
              </Link>
            </Item>
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

function DesktopMenu() {
  return (
    <div className="w-full flex flex-row items-center justify-between fixed top-0 left-0 right-0 bg-white z-50 p-5 shadow-xs">
      <RTWebLogo />
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              {Boolean(item.submenu) && (
                <>
                  <NavigationMenuTrigger
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {item.submenu?.map((subitem) => (
                        <ListItem key={subitem.name} {...subitem}>
                          {subitem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              )}

              {Boolean(!item.submenu) && (
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <CTAButton />
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="w-full flex flex-row items-center justify-between fixed top-0 left-0 right-0 bg-white z-50 p-5 shadow-xs">
      <RTWebLogo />
      <Drawer direction="right">
        <DrawerTrigger>
          <Menu size={24} />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col" fullWidth>
          <DrawerHeader className="flex flex-row justify-between items-center p-5">
            <RTWebLogo />
            <DrawerClose>
              <X size={24} />
            </DrawerClose>
          </DrawerHeader>

          <div className="flex flex-col gap-2 px-5">
            {menuItems.map((item) => (
              <CollapsibleMenuItem key={item.name} item={item} />
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 990px)");
  return <header>{isDesktop ? <DesktopMenu /> : <MobileMenu />}</header>;
}
