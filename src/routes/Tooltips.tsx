import { Tooltip } from "../components/Tooltip";

const Tooltips = () => {
    return (
        <div className="h-full w-full">
            <h1 className="text-6xl font-black mb-16 text-left" style={{ fontFamily: "cursive" }}>
                TOOLTIP <span className="text-[#5e5d5d]">TWO STYLES, BOLD AND LIGHT</span>
            </h1>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {/* Row 1: Black */}
                <Tooltip variant="black" style="bold" />
                <Tooltip variant="black" style="light" />

                {/* Row 2: Blue */}
                <Tooltip variant="blue" style="bold" />
                <Tooltip variant="blue" style="light" />

                {/* Row 3: Purple */}
                <Tooltip variant="purple" style="bold" />
                <Tooltip variant="purple" style="light" />

                {/* Row 4: Green */}
                <Tooltip variant="green" style="bold" />
                <Tooltip variant="green" style="light" />
            </div>
        </div>
    )
}

export default Tooltips;