import clsx from "clsx";

const variants: Record<string, string> = {
    gray: "bg-gray-100 text-gray-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    indigo: "bg-indigo-100 text-indigo-800",
    purple: "bg-purple-100 text-purple-800",
    pink: "bg-pink-100 text-pink-800",
};

const Badge = ({
    children,
    className,
    shape = "square",
    variant = "gray",
    ...rest
}: {
    children: React.ReactNode,
    className?: string,
    shape?: "square" | "pill",
    variant?: "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink"
}) => {

    return (
        <span
            {...rest}
            className={clsx(
                "inline-block px-3 py-[2px] text-xs font-semibold",
                shape === "square" ? "rounded-md" : "rounded-full",
                variants[variant],
                className
            )}>
            {children}
        </span>
    );
}

export default Badge;
