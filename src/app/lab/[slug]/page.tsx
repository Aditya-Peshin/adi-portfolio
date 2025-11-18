import { notFound } from "next/navigation";
import Link from "next/link";

const experiments = [
    {
        slug: "orbit-systems",
        title: "Orbit systems visualizer",
        summary: "Simple SVG/D3 experiment to explore orbital motion.",
        body: "This experiment will eventually visualize simple orbital mechanics using SVG and D3. For now, it's just a placeholder page.",
    },
];

type Params = {
    params: {
        slug: string;
    };
};

export function generateStaticParams() {
    return experiments.map((exp) => ({ slug: exp.slug }));
}

export const metadata = {
    title: "Experiment · Aditya P",
};

export default function ExperimentPage({ params }: Params) {
    const experiment = experiments.find((exp) => exp.slug === params.slug);

    if (!experiment) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <Link
                href="/lab"
                className="text-xs text-neutral-500 hover:text-neutral-200"
            >
                ← Back to lab
            </Link>

            <header className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tight">
                    {experiment.title}
                </h1>
                <p className="max-w-xl text-sm text-neutral-400">
                    {experiment.summary}
                </p>
            </header>

            <section className="text-sm text-neutral-300">
                <p>{experiment.body}</p>
            </section>
        </div>
    );
}
