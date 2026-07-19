export interface PackageItem
{
    title: string;
    description: string;
    status: "Available" | "In Development" | "Planned";
    href: string;
}

export const packageItems: PackageItem[] =
[
    {
        title: "Runtime Core",
        description: "The foundational runtime architecture used by every package in the toolkit.",
        status: "Available",
        href: "/toolkit/runtime-core"
    },
    {
        title: "Save System",
        description: "A modular persistence system designed for clean data ownership and extensibility.",
        status: "In Development",
        href: "/toolkit/save-system"
    },
    {
        title: "Audio System",
        description: "A structured approach to music, sound effects and audio configuration.",
        status: "Planned",
        href: "/toolkit/audio-system"
    }
];