import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react'
import { cn } from '../utils'


interface BannerProps {
    variant: "success" | "warning" | "error" | "neutral"
    title: string
    description?: string
    className?: string
}

export function Banner({ variant, title, description, className }: BannerProps) {
    const icons = {
        success: <CheckCircle className="h-5 w-5 text-green-600" />,
        warning: <AlertTriangle className="h-5 w-5 text-amber-600" />,
        error: <XCircle className="h-5 w-5 text-red-600" />,
        neutral: <Info className="h-5 w-5 text-blue-600" />
    }

    const backgrounds = {
        success: "bg-green-50",
        warning: "bg-amber-50",
        error: "bg-red-50",
        neutral: "bg-blue-50"
    }

    return (
        <div className={cn("flex rounded-md p-4", backgrounds[variant], className)}>
            <div className="flex-shrink-0">{icons[variant]}</div>
            <div className="ml-3">
                <h3 className={cn(
                    "text-sm font-medium",
                    variant === "success" && "text-green-800",
                    variant === "warning" && "text-amber-800",
                    variant === "error" && "text-red-800",
                    variant === "neutral" && "text-blue-800"
                )}>
                    {title}
                </h3>
                {description && (
                    <div className={cn(
                        "mt-2 text-sm",
                        variant === "success" && "text-green-700",
                        variant === "warning" && "text-amber-700",
                        variant === "error" && "text-red-700",
                        variant === "neutral" && "text-blue-700"
                    )}>
                        {description}
                    </div>
                )}
            </div>
        </div>
    )
}
