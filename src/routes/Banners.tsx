import Banner from "../components/Banner";

const Banners = () => {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`text-2xl font-medium`}>Banners</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4">
                <Banner
                    title="Success"
                    type="success"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>

                <Banner
                    title="Success"
                    type="success"
                />

                <Banner
                    title="Attention"
                    type="warning"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>

                <Banner
                    title="Attention"
                    type="warning"
                />

                <Banner
                    title="Error"
                    type="error"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>

                <Banner
                    title="Error"
                    type="error"
                />

                <Banner
                    title="Update"
                    type="neutral"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>

                <Banner
                    title="Update"
                    type="neutral"
                />
            </div>

        </div>
    );
}

export default Banners;