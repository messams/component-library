// Cards.tsx
import { Upload } from "lucide-react";
import Card from "../components/Card"; // Adjust the path if needed

const Cards = () => {
    const description =
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.";

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h1
                    className="text-7xl font-bold text-center mb-16 mt-8"
                    style={{ fontFamily: "'Permanent Marker', cursive" }}
                >
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
        </div>
    );
};

export default Cards;
