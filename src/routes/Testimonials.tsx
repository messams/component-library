import Testimonial from "../components/Testimonial";

const Testimonials = () => {
    return (
        <div className="h-full w-full">
            {/* Testimonials Header */}
            <h1 className="text-6xl font-black mb-16 text-left" style={{ fontFamily: "cursive" }}>TESTIMONIALS</h1>

            {/* With Pic Section */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold mb-12 font-['Caveat',_cursive]">WITH PIC</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Testimonial
                        withPic
                        imgSrc="/placeholder.svg?height=400&width=300"
                        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                        name="May Andersons"
                        role="CTO"
                        company="Workcation"
                    />
                    <Testimonial
                        withPic
                        imgSrc="/placeholder.svg?height=400&width=300"
                        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                        name="May Andersons"
                        role="CTO"
                        company="Workcation"
                    />
                </div>
            </div>

            <div className="pb-24">
                <h2 className="text-3xl font-bold mb-12 font-['Caveat',_cursive] text-black">NO PIC</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Testimonial
                        quote="Nemo expedita voluptas culpa sapiente alias molestiae..."
                        name="May Andersons"
                        role="CTO"
                        company="Workcation"
                        logoSrc="/placeholder.svg?height=30&width=30"
                        alignment="center"
                    />
                    <Testimonial
                        quote="Numquam corrupti in laborum sed rerum et corporis..."
                        name="May Andersons"
                        role="CTO"
                        company="Workcation"
                        logoSrc="/placeholder.svg?height=30&width=30"
                        alignment="right"
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;