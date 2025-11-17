import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type ShellProps = {
    children: ReactNode;
};

export function Shell({ children }: ShellProps) {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
                <Header />
                <main className="flex-1 py-6">{children}</main>
                <Footer />
            </div>
        </div>
    );
}
