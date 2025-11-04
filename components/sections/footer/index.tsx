import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
  FooterComponent,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { RTWebLogo } from "@/components/custom/rtweb-logo";
import Link from "next/link";

interface FooterLink {
  text: string;
  href?: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: ReactNode;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function Footer({
  logo = <RTWebLogo />,
  columns = [
    {
      title: "Produits",
      links: [
        { text: "Glyph", href: "https://glyph.chat" },
        { text: "Fidarna", href: "https://fidarna.com" },
      ],
    },
    {
      title: "Siège Social",
      links: [{ text: "15 rue des halles" }, { text: "75001 Paris, France" }],
    },

    {
      title: "Contact",
      links: [{ text: "contact@rtweb.co", href: "mailto:contact@rtweb.co" }],
    },
  ],
  policies = [{ text: "Mentions légales", href: "/mentions-legales" }],
  className,
}: FooterProps) {
  return (
    <footer id="footer" className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <FooterComponent>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">{logo}</div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) =>
                  link.href ? (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="text-muted-foreground text-sm"
                    >
                      {link.text}
                    </Link>
                  ) : (
                    <span
                      key={linkIndex}
                      className="text-muted-foreground text-sm"
                    >
                      {link.text}
                    </span>
                  )
                )}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div className="flex items-center w-full justify-end gap-4">
              {policies.map((policy, index) => (
                <Link key={index} href={policy.href || "#"}>
                  {policy.text}
                </Link>
              ))}
            </div>
          </FooterBottom>
        </FooterComponent>
      </div>
    </footer>
  );
}
