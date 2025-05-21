import { QuoteIcon } from "lucide-react";

interface TestimonialProps {
    withPic?: boolean;
    imgSrc?: string;
    logoSrc?: string;
    quote: string;
    name: string;
    role: string;
    company: string;
    alignment?: "left" | "right" | "center";
}

const Testimonial = ({
    withPic = false,
    imgSrc,
    logoSrc,
    quote,
    name,
    role,
    company,
    alignment = "left",
}: TestimonialProps) => {
    const alignmentClass =
        alignment === "right"
            ? "text-right justify-end"
            : alignment === "center"
                ? "text-center justify-center"
                : "text-left justify-start";

    if (withPic) {
        return (
            <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-md">
                {imgSrc && (
                    <div className="md:w-2/5">
                        <img
                            src={imgSrc}
                            alt="Testimonial"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className="md:w-3/5 bg-[#2e59f3] p-8 relative">
                    <QuoteIcon className="text-[#2545b8] absolute top-6 left-6 h-10 w-10" />
                    <p className="text-white mt-8 mb-6">{quote}</p>
                    <div className="text-white">
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm">
                            {company}, {role}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#f9fafb] p-8 rounded-lg relative shadow-sm">
            <div className={`flex ${alignmentClass} mb-6`}>
                {logoSrc && (
                    <div className="flex items-center">
                        <img src={logoSrc} alt={`${company} logo`} width={30} height={30} className="mr-2" />
                        <span className="text-[#1f2937] font-semibold">{company}</span>
                    </div>
                )}
            </div>
            <p className={`${alignmentClass} text-[#1f2937] mb-6`}>"{quote}"</p>
            <div className={`flex ${alignmentClass}`}>
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-[#6b7280]">{company}, {role}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
