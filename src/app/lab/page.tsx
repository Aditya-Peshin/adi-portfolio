import Link from "next/link";

type Experiment = {
    slug: string;
    title: string;
    summary: string;
    status?: "in-progress" | "planned";
};

const experiments: Experiment[] = [
    {
        slug: "orbit-systems",
        title: "Orbit systems visualizer",
        summary: "Simple SVG/D3 experiment to explore orbital motion.",
        status: "planned",
    },
];

export const metadata = {
    title: "Lab · Aditya P",
    description: "Playground for interactive experiments and visualizations.",
};

export default function LabPage() {
    return (
        <div className="space-y-6">
            <header className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tight">Lab</h1>
                <p className="max-w-xl text-sm text-neutral-400">
                    A small playground for experiments in interaction, visualization, and
                    tools. Most of this will start as rough sketches.
                </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2">
                {experiments.map((exp) => (
                    <Link
                        key={exp.slug}
                        href={`/lab/${exp.slug}`}
                        className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 hover:border-neutral-500 hover:bg-neutral-900"
                    >
                        <h2 className="text-sm font-medium">{exp.title}</h2>
                        <p className="mt-2 text-xs text-neutral-400">{exp.summary}</p>
                        {exp.status && (
                            <p className="mt-2 text-[10px] uppercase tracking-wide text-neutral-500">
                                {exp.status === "in-progress" ? "In progress" : "Planned"}
                            </p>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}
