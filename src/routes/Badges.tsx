import Badge from "../components/Badge";

const Badges = () => {
    return (
        <div className="w-full h-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`text-2xl font-medium`}>Badges</h1>
            </div>
            <div className="h-full flex flex-col flex-wrap gap-4 mt-4 justify-center items-center">
                <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
                    <h2 className="text-[#5E5D5D] font-semibold">
                        Square
                    </h2>
                    <Badge variant="gray">Badge</Badge>
                    <Badge variant="red">Badge</Badge>
                    <Badge variant="yellow">Badge</Badge>
                    <Badge variant="green">Badge</Badge>
                    <Badge variant="blue">Badge</Badge>
                    <Badge variant="indigo">Badge</Badge>
                    <Badge variant="purple">Badge</Badge>
                    <Badge variant="pink">Badge</Badge>
                </div>
                <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
                    <h2 className="text-[#5E5D5D] font-semibold">
                        Pill
                    </h2>
                    <Badge shape="pill" variant="gray">Badge</Badge>
                    <Badge shape="pill" variant="red">Badge</Badge>
                    <Badge shape="pill" variant="yellow">Badge</Badge>
                    <Badge shape="pill" variant="green">Badge</Badge>
                    <Badge shape="pill" variant="blue">Badge</Badge>
                    <Badge shape="pill" variant="indigo">Badge</Badge>
                    <Badge shape="pill" variant="purple">Badge</Badge>
                    <Badge shape="pill" variant="pink">Badge</Badge>
                </div>
            </div>

        </div>
    );
}

export default Badges;