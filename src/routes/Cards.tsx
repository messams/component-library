// Cards.tsx
import { Upload } from "lucide-react";
import Card from "../components/Card"; // Adjust the path if needed

const Cards = () => {
    const description =
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.";

    return (
        <div className="h-full w-full">
            {/* Title */}
            <h1 className="text-6xl font-black mb-16 text-left" style={{ fontFamily: "cursive" }}>
                CARDS
            </h1>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card
                    icon={<Upload className="w-8 h-8" />}
                    title="Easy Deployment"
                    description={description}
                />
                <Card
                    icon={<Upload className="w-8 h-8" />}
                    title="Easy Deployment"
                    description={description}
                    hoverLabel="HOVER"
                    hoverEffect={true}
                />
            </div>

        </div>
    );
};

export default Cards;
