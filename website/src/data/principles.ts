export interface Principle
{
    title: string;
    description: string;
}

export const principles: Principle[] =
[
    {
        title: "Modular",
        description: "Build independent systems with clear responsibilities and predictable dependencies."
    },
    {
        title: "Maintainable",
        description: "Keep projects understandable and easier to change as features and teams grow."
    },
    {
        title: "Scalable",
        description: "Use structures that work for early prototypes and remain reliable in production."
    },
    {
        title: "Practical",
        description: "Apply architecture patterns designed around real Unity development workflows."
    }
];