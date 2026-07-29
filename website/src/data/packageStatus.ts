export type PackageStatus = "Available" | "In Development" | "Planned";

export type BadgeVariant = "success" | "warning" | "neutral";

export const statusBadgeVariant: Record<PackageStatus, BadgeVariant> =
{
    "Available":        "success",
    "In Development":   "warning",
    "Planned":          "neutral",
};