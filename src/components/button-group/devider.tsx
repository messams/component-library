import clsx from "clsx";

const Divider = ({
    className,
}: {
    className?: string;

}) => {
    return (
        <div className={clsx(
            "border-l-[1px] border-neutral-500 dark:border-neutral-600 my-1",
            className
        )}></div>
    )
}

export default Divider;