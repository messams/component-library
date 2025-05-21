import { Badge } from '../components/Badge';

const Badges = () => {
    const variants = ["default", "red", "yellow", "green", "lightBlue", "blue", "purple", "pink"] as const

    return (
        <div className="h-full w-full flex flex-col">
            <h1 className="text-6xl font-black mb-16 text-left" style={{ fontFamily: "cursive" }}>
                BADGES
            </h1>

            <div className="w-full h-full flex flex-col gap-16">
                <div className="flex items-center gap-4">
                    <div className="w-32 text-4xl font-bold text-[#5e5d5d]" style={{ fontFamily: "cursive" }}>
                        Square
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {variants.map((variant) => (
                            <Badge key={`square-${variant}`} variant={variant} shape="square">
                                Badge
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-32 text-4xl font-bold text-[#5e5d5d]" style={{ fontFamily: "cursive" }}>
                        Pill
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {variants.map((variant) => (
                            <Badge key={`pill-${variant}`} variant={variant} shape="pill">
                                Badge
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Badges;