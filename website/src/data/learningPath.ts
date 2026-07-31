export type ChapterStatus = "free" | "paid" | "coming-soon";

export interface LearningPathItem
{
    chapter: number;
    title: string;
    description: string;
    status: ChapterStatus;
    href: string;
    buyHref: string;
}

export const chapterCTA: Record<ChapterStatus, { label: string; href: (item: LearningPathItem) => string } | null> =
{
    "free":         { label: "Read Chapter", href: (item) => item.href    },
    "paid":         { label: "Buy Chapter",  href: (item) => item.buyHref },
    "coming-soon":  null,
};

export const storeCTA: Record<ChapterStatus, { label: string; href: (item: LearningPathItem) => string } | null> =
{
    "free":         { label: "Read Free",  href: (item) => item.href    },
    "paid":         { label: "Buy Now",    href: (item) => item.buyHref },
    "coming-soon":  null,
};

export const learningPathItems: LearningPathItem[] =
[
    {
        chapter: 1,
        title: "Why Projects Become Spaghetti",
        description: "Understand how complexity grows in Unity projects and why most architectures eventually break down.",
        status: "free",
        href: "https://krisztianbajko.github.io/unity-architecture-handbook/",
        buyHref: "#"
    },
    {
        chapter: 2,
        title: "Modularity & Service Architecture",
        description: "Learn how to organise systems using services, bootstrappers, events and clear module boundaries.",
        status: "free",
        href: "https://krisztianbajko.github.io/unity-architecture-handbook/chapter-2.html",
        buyHref: "#"
    },
    {
         chapter: 3,
         title: "Interfaces & Abstraction",
         description: "Learn how contracts create flexible architecture. Understand interfaces, the Dependency Inversion Principle, and how the toolkit uses contracts throughout its design.",
         status: "free",
         href: "#",
         buyHref: "#"
    }
];