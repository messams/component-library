import clsx from "clsx";

const Gruop = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={clsx(
            "inline-flex rounded-md shadow-xs gap-0.5",
            className
        )}>
            {children}
        </div>
    );
}

export default Gruop;