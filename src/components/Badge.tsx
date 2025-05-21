import { cn } from "../utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "red" | "yellow" | "green" | "lightBlue" | "blue" | "purple" | "pink"
    shape?: "square" | "pill"
}

export function Badge({ className, variant = "default", shape = "square", children, ...props }: BadgeProps) {
    const variantStyles = {
        default: "bg-[#f3f4f6] text-[#1f2937]",
        red: "bg-[#fee2e2] text-[#991b1b]",
        yellow: "bg-[#fef3c7] text-[#92400e]",
        green: "bg-[#d1fae5] text-[#065f46]",
        lightBlue: "bg-[#dbeafe] text-[#1e40af]",
        blue: "bg-[#e0e7ff] text-[#3730a3]",
        purple: "bg-[#ede9fe] text-[#5b21b6]",
        pink: "bg-[#fce7f3] text-[#9d174d]",
    }

    const shapeStyles = {
        square: "rounded-md",
        pill: "rounded-full",
    }

    return (
        <div
            className={cn(
                "inline-flex items-center justify-center px-4 py-1 text-sm font-medium",
                variantStyles[variant],
                shapeStyles[shape],
                className,
            )}
            {...props}
        >
            {children}
        </div>
    )
}
