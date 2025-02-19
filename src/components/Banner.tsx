import { CheckCircleIcon, XCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React from "react";
const Banner = ({
    type = "success",
    title,
    children,
}: {
    type: "success" | "warning" | "error" | "neutral",
    title: string,
    children?: React.ReactNode,
}) => {

    return (
        <div className={clsx(
            "p-4 rounded-md",
            type === "success" && "bg-[#ECFDF5] ",
            type === "warning" && "bg-[#FFFBEB] ",
            type === "error" && "bg-[#FEF2F2] ",
            type === "neutral" && "bg-[#EFF6FF] ",
        )}>
            <div className="flex">
                <div className="shrink-0">
                    {type === "success" && <CheckCircleIcon className="h-5 w-5 text-[#34D399]" />}
                    {type === "warning" && <ExclamationTriangleIcon className="h-5 w-5 text-[#FBBF24]" />}
                    {type === "error" && <XCircleIcon className="h-5 w-5 text-[#F87171]" />}
                    {type === "neutral" && <ExclamationCircleIcon className="h-5 w-5 text-[#60A5FA]" />}
                </div>
                <div className="ms-3">
                    <h3 className={clsx(
                        `font-medium text-sm leading-[20px]`,
                        type === "success" && "text-[#065F46]",
                        type === "warning" && "text-[#92400E]",
                        type === "error" && "text-[#92400E]",
                        type === "neutral" && "text-[#1E40AF]",
                    )}
                        id="hs-bordered-success-style-label"
                    >
                        {title}
                    </h3>
                    {children ? <p className={clsx(
                        "font-normal text-sm leading-[20px]",
                        type === "success" && "text-[#047857]",
                        type === "warning" && "text-[#B45309]",
                        type === "error" && "text-[#B45309]",
                        type === "neutral" && "text-[#1C51B9]",
                    )}>
                        {children}
                    </p> : null}
                </div>
            </div>
        </div>
    );
}

export default Banner;