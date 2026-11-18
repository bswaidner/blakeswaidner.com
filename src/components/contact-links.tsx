import Link from "next/link";

import { profile } from "@/content";

const linkClass = "inline-flex min-h-11 items-center text-[15px]";

/** The ruled row of contact links that closes a page. */
export function ContactLinks({ resume = true }: { resume?: boolean }) {
  return (
    <footer
      id="contact"
      className="flex flex-wrap gap-x-7 border-t border-ink print:hidden"
    >
      {profile.links.map((link) => (
        <a key={link.href} href={link.href} className={linkClass}>
          {link.label}
        </a>
      ))}
      {resume && (
        <Link href="/resume" className={linkClass}>
          Résumé
        </Link>
      )}
    </footer>
  );
}
