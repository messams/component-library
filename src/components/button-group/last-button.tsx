import clsx from "clsx";

const LastButton = ({
    children,
    className,
    ...rest
}: {
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            {...rest}
            className={clsx(
                "group px-4 py-2 text-sm font-medium rounded-md hover:text-blue-700 dark:border-neutral-300 dark:focus:ring-blue-500 bg-neutral-200 dark:bg-neutral-900",
                className
            )}>
            {children}
        </button>
    );
}

export default LastButton;