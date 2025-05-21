import { Mail, X } from "lucide-react"

interface TooltipProps {
    variant: "black" | "blue" | "purple" | "green"
    style: "bold" | "light"
    className?: string
}

export function Tooltip({ variant = "black", style = "bold", className = "" }: TooltipProps) {
    // Color mapping for different variants and styles
    const getColors = () => {
        switch (variant) {
            case "black":
                return style === "bold"
                    ? { bg: "bg-[#262626]", text: "text-white" }
                    : { bg: "bg-white", text: "text-[#262626]" }
            case "blue":
                return style === "bold"
                    ? { bg: "bg-[#1e40af]", text: "text-white" }
                    : { bg: "bg-[#e0e7ff]", text: "text-[#1c51b9]" }
            case "purple":
                return style === "bold"
                    ? { bg: "bg-[#a9229b]", text: "text-white" }
                    : { bg: "bg-[#fff3fc]", text: "text-[#c7369e]" }
            case "green":
                return style === "bold"
                    ? { bg: "bg-[#137a2a]", text: "text-white" }
                    : { bg: "bg-[#e7fff3]", text: "text-[#3c8c4e]" }
            default:
                return style === "bold"
                    ? { bg: "bg-[#262626]", text: "text-white" }
                    : { bg: "bg-white", text: "text-[#262626]" }
        }
    }

    const colors = getColors()
    const bgClass = colors.bg || ""
    const textClass = colors.text || ""

    return (
        <div className={`relative max-w-md ${className}`}>
            <div className={`rounded-lg p-4 shadow-lg ${bgClass} ${textClass} `}>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        <h3 className="font-medium">Archive notes</h3>
                    </div>
                    <button className="rounded-full p-0.5 hover:bg-black/10 cursor-pointer">
                        <X className="h-5 w-5" />
                    </button>
                </div>
                <p className="mt-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</p>
            </div>
            {/* Tooltip pointer */}
            <div className={`absolute -bottom-2 left-6 h-4 w-4 rotate-45 ${bgClass} `} />
        </div>
    )
}
