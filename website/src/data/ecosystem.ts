export interface EcosystemItem
{
    title: string;
    description: string;
    href: string;
    icon: string;
}

export const ecosystemItems: EcosystemItem[] =
[
    {
        title: "Handbook",
        description: "Learn the principles behind professional Unity architecture.",
        href: "/learn",
        icon: "📘"
    },
    {
        title: "Toolkit",
        description: "Use production-ready packages that implement those principles.",
        href: "/toolkit",
        icon: "🧰"
    },
    {
        title: "Portal",
        description: "Explore documentation, guides and examples that connect the ecosystem.",
        href: "/",
        icon: "🌐"
    }
];