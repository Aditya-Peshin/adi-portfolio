import Link from "next/link";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/writing", label: "Writing" },
    { href: "/lab", label: "Lab" },
];

export function Header() {
    return (
        <header className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <Link href="/" className="text-sm font-semibold tracking-tight">
                Aditya P
            </Link>

            <nav className="flex gap-4 text-xs sm:text-sm">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-neutral-400 transition hover:text-neutral-50"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
