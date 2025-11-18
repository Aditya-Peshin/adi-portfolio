type Post = {
    title: string;
    summary: string;
    status: "draft" | "idea";
};

const posts: Post[] = [
    {
        title: "Living with large refactors",
        summary:
            "Notes on designing tooling and workflows for long-running, high-risk refactors in large codebases.",
        status: "idea",
    },
    {
        title: "External structure for depressed engineers",
        summary:
            "Thoughts on rituals, environments, and systems that make it easier to function when motivation is unreliable.",
        status: "draft",
    },
];

export const metadata = {
    title: "Writing · Aditya P",
    description: "Notes, essays, and explorations.",
};

export default function WritingPage() {
    return (
        <div className="space-y-6">
            <header className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tight">Writing</h1>
                <p className="max-w-xl text-sm text-neutral-400">
                    Notes and essays I&apos;d like to publish eventually. For now this is
                    a lightly sketched table of contents.
                </p>
            </header>

            <div className="space-y-3">
                {posts.map((post) => (
                    <article
                        key={post.title}
                        className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4"
                    >
                        <h2 className="text-sm font-medium">{post.title}</h2>
                        <p className="mt-2 text-xs text-neutral-400">{post.summary}</p>
                        <p className="mt-2 text-[10px] uppercase tracking-wide text-neutral-500">
                            {post.status === "draft" ? "Draft" : "Idea"}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    );
}
