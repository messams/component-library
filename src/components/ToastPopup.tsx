import { CheckCircle, AlertCircle, Info, X } from "lucide-react"

interface ToastProps {
    variant: "success" | "warning" | "information" | "error"
    title: string
    message: string
}

export function Toast({ variant, title, message }: ToastProps) {
    const variants = {
        success: {
            bg: "bg-[#ecfdf5]",
            icon: <CheckCircle className="w-6 h-6 text-[#34d399]" />,
            titleColor: "text-[#065f46]",
            messageColor: "text-[#047857]",
        },
        warning: {
            bg: "bg-[#fffbeb]",
            icon: <AlertCircle className="w-6 h-6 text-[#fbbf24]" />,
            titleColor: "text-[#92400e]",
            messageColor: "text-[#b45309]",
        },
        information: {
            bg: "bg-[#eff6ff]",
            icon: <Info className="w-6 h-6 text-[#60a5fa]" />,
            titleColor: "text-[#1e40af]",
            messageColor: "text-[#1c51b9]",
        },
        error: {
            bg: "bg-[#fef2f2]",
            icon: <X className="w-6 h-6 text-[#f87171]" />,
            titleColor: "text-[#b91c1c]",
            messageColor: "text-[#ef4444]",
        },
    }

    const { bg, icon, titleColor, messageColor } = variants[variant]

    return (
        <div className={`${bg} rounded-lg p-4 shadow-md flex items-start gap-3 max-w-md`}>
            <div className="shrink-0 mt-0.5">{icon}</div>
            <div>
                <h3 className={`font-medium text-lg ${titleColor}`}>{title}</h3>
                <p className={`${messageColor}`}>{message}</p>
            </div>
        </div>
    )
}