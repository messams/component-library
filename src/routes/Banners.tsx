import { Banner } from "../components/Banner";

const Banners = () => {
    return (
        <div className="container mx-auto py-12 px-4 w-full h-full">
            <h1 className="text-6xl font-black mb-12 text-center" style={{ fontFamily: "'Permanent Marker', cursive" }}>
                BANNERS
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-600 mb-6" style={{ fontFamily: "'Permanent Marker', cursive" }}>
                        MULTI LINE
                    </h2>

                    <div className="space-y-8">
                        <div className="flex items-center">
                            <h3
                                className="w-32 text-2xl font-bold text-gray-600"
                                style={{ fontFamily: "'Permanent Marker', cursive" }}
                            >
                                Success
                            </h3>
                            <Banner
                                variant="success"
                                title="Congratulations!"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
                                className="flex-1"
                            />
                        </div>

                        <div className="flex items-center">
                            <h3
                                className="w-32 text-2xl font-bold text-gray-600"
                                style={{ fontFamily: "'Permanent Marker', cursive" }}
                            >
                                Warning
                            </h3>
                            <Banner
                                variant="warning"
                                title="Attention"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
                                className="flex-1"
                            />
                        </div>

                        <div className="flex items-center">
                            <h3
                                className="w-32 text-2xl font-bold text-gray-600"
                                style={{ fontFamily: "'Permanent Marker', cursive" }}
                            >
                                Error
                            </h3>
                            <Banner
                                variant="error"
                                title="There is a problem with your application"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
                                className="flex-1"
                            />
                        </div>

                        <div className="flex items-center">
                            <h3
                                className="w-32 text-2xl font-bold text-gray-600"
                                style={{ fontFamily: "'Permanent Marker', cursive" }}
                            >
                                Neutral
                            </h3>
                            <Banner
                                variant="neutral"
                                title="Update available"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
                                className="flex-1"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-600 mb-6" style={{ fontFamily: "'Permanent Marker', cursive" }}>
                        SINGLE LINE
                    </h2>

                    <div className="space-y-8">
                        <div className="flex items-center">
                            <h3
                                className="w-32 text-2xl font-bold text-gray-600"
                                style={{ fontFamily: "'Permanent Marker', cursive" }}
                            >
                                Success
                            </h3>
                            <Banner variant="success" title="Congratulations!" className="flex-1" />
                        </div>

                        <div className="flex items-center">
                            <h3
                                className="w-32 text-2xl font-bold text-gray-600"
                                style={{ fontFamily: "'Permanent Marker', cursive" }}
                            >
                                Warning
                            </h3>
                            <Banner variant="warning" title="Attention" className="flex-1" />
                        </div>

                        <div className="flex items-center">
                            <h3
                                className="w-32 text-2xl font-bold text-gray-600"
                                style={{ fontFamily: "'Permanent Marker', cursive" }}
                            >
                                Error
                            </h3>
                            <Banner variant="error" title="There is a problem with your application" className="flex-1" />
                        </div>

                        <div className="flex items-center">
                            <h3
                                className="w-32 text-2xl font-bold text-gray-600"
                                style={{ fontFamily: "'Permanent Marker', cursive" }}
                            >
                                Neutral
                            </h3>
                            <Banner variant="neutral" title="Update available" className="flex-1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banners;