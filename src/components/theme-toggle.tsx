import { useTheme } from "../context/Theme";
import { ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Group from "./button-group";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted before rendering
    useEffect(() => {
        setMounted(true);
    }, []);

    // Avoid rendering the toggle buttons until mounted
    if (!mounted) return null;

    return (<>
        <Group className="">
            <Group.FirstButton
                onClick={() => toggleTheme('system')}
                className={clsx(theme === 'system' && 'text-blue-500')}
            >
                <ComputerDesktopIcon className={clsx('w-5 h-5 group-hover:text-blue-700', theme === 'system' ? 'text-blue-600' : 'text-neutral-700 dark:text-neutral-300')} />
            </Group.FirstButton>
            {/* <Group.Divider /> */}
            <Group.Button
                onClick={() => toggleTheme('light')}
                className={clsx(theme === 'light' && 'text-blue-500')}
            >
                <SunIcon className={clsx('w-5 h-5 group-hover:text-blue-700', theme === 'light' ? 'text-blue-600' : 'text-neutral-700 dark:text-neutral-300')} />
            </Group.Button>
            {/* <Group.Divider /> */}
            <Group.LastButton
                onClick={() => toggleTheme('dark')}
                className={clsx(theme === 'dark' && 'text-blue-500')}
            >
                <MoonIcon className={clsx('w-5 h-5 group-hover:text-blue-700', theme === 'dark' ? 'text-blue-600' : 'text-neutral-700 dark:text-neutral-300')} />
            </Group.LastButton>
        </Group>
    </>
    );
};

export default ThemeToggle;
