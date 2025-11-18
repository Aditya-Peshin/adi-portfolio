type Project = {
    title: string;
    role: string;
    timeframe?: string;
    summary: string;
    tags: string[];
};

const projects: Project[] = [
    {
        title: "Multi-agent mypy refactor tooling",
        role: "Senior Fullstack Engineer · Klaviyo",
        timeframe: "2024–2025",
        summary:
            "Designed and implemented a system to semi-automate large-scale mypy error remediation using multi-agent workflows, git worktrees, and CI-friendly orchestration.",
        tags: ["TypeScript", "Python", "Next.js", "Developer tooling"],
    },
    {
        title: "Customer data platform features",
        role: "Senior Fullstack Engineer · Klaviyo",
        timeframe: "2022–2024",
        summary:
            "Shipped key features across the CDP stack, from React frontends to Python/Django backends and AWS infrastructure.",
        tags: ["React", "Django", "AWS", "Distributed systems"],
    },
];

export const metadata = {
    title: "Work · Aditya P",
    description: "Selected projects and case studies.",
};

export default function WorkPage() {
    return (
        <div className="space-y-6">
            <header className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tight">Work</h1>
                <p className="max-w-xl text-sm text-neutral-400">
                    A few things I&apos;ve worked on recently. I&apos;ll add deeper case
                    studies over time.
                </p>
            </header>

            <div className="space-y-4">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4"
                    >
                        <h2 className="text-sm font-medium">{project.title}</h2>
                        <p className="mt-1 text-xs text-neutral-400">
                            {project.role}
                            {project.timeframe ? ` · ${project.timeframe}` : null}
                        </p>
                        <p className="mt-3 text-sm text-neutral-300">{project.summary}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-neutral-700 px-2 py-0.5 text-[10px] uppercase tracking-wide text-neutral-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
