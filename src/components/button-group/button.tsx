import clsx from "clsx";

const Button = ({
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
                "group px-4 rounded-md py-2 text-sm font-medium hover:text-blue-700 dark:border-neutral-300 bg-neutral-200 dark:bg-neutral-900",
                className
            )}>
            {children}
        </button>
    );
}

export default Button;