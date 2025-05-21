// components/Card.tsx
import { ReactNode } from "react";

interface CardProps {
    icon: ReactNode;
    title: string;
    description: string;
    hoverLabel?: string;
    hoverEffect?: boolean;
}

const Card = ({ icon, title, description, hoverLabel, hoverEffect = false }: CardProps) => {
    return (
        <div
            className={`rounded-lg p-8 relative transition-all duration-300 ${hoverEffect ? "shadow-lg hover:shadow-xl" : "shadow-md hover:shadow-lg"
                }`}
        >
            {/* Optional Hover Label */}
            {hoverLabel && (
                <div
                    className="absolute top-4 right-4 text-[#5e5d5d] font-bold transform rotate-12"
                    style={{ fontFamily: "'Permanent Marker', cursive" }}
                >
                    {hoverLabel}
                </div>
            )}

            {/* Icon */}
            <div className="bg-[#3f75fe] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {icon}
            </div>

            {/* Title & Description */}
            <h2 className="text-[#111827] text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-[#6b7280] text-center">{description}</p>
        </div>
    );
};

export default Card;
