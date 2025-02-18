import { NavLink } from 'react-router-dom';
import NavLinks from './nav-links';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from './../App';
import clsx from 'clsx';
import { useContext } from 'react';
// import EssamLogo from '@/app/ui/essam-logo';


export default function SideNav() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <NavLink
        className="mb-2 flex h-[60px] items-end justify-start rounded-md bg-(--base-color) p-4 md:h-24 md:mb-4"
        to="/"
      >
        <div className="w-32 text-(--secondary-font-color) md:w-40">
          <h1 className="text-2xl font-normal">
            Reusability
          </h1>
        </div>
      </NavLink>
      <div className="
        flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2
        pb-1 md:pr-0.5
        overflow-x-auto md:overflow-auto 
        [&::-webkit-scrollbar]:w-[10px]
        [&::-webkit-scrollbar]:h-[10px] 
        [&::-webkit-scrollbar-track]:rounded-full 
        [&::-webkit-scrollbar-track]:bg-(--bg-color) 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        [&::-webkit-scrollbar-thumb]:bg-(--hover-bg-color)
        ">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-(--fg-color) md:block"></div>
        <div className='flex h-[40px] items-center justify-center rounded-md bg-(--fg-color) p-3 md:flex-row md:justify-center md:p-2 md:px-3'>

          <button
            onClick={() => {
              toggleTheme('system')
              console.log(theme)
            }}
            className="flex h-[40px] items-center justify-center rounded-md bg-(--fg-color) p-3 text-sm font-medium hover:bg-(--hover-bg-color) hover:text-blue-600"
          >
            <ComputerDesktopIcon className={clsx('w-5 h-5', theme === 'system' ? 'text-(--hover-color)' : 'text-(--not-active-color)')} />
          </button>
          <button
            onClick={() => {
              toggleTheme('light')
              console.log(theme)
            }}
            className="flex h-[40px] items-center justify-center rounded-md bg-(--fg-color) p-3 text-sm font-medium hover:bg-(--hover-bg-color) hover:text-blue-600"
          >
            <SunIcon className={clsx('w-5 h-5', theme === 'light' ? 'text-(--hover-color)' : 'text-(--not-active-color)')} />
          </button>
          <button
            onClick={() => {
              toggleTheme('dark')
              console.log(theme)
            }}
            className="flex h-[40px] items-center justify-center rounded-md bg-(--fg-color) p-3 text-sm font-medium hover:bg-(--hover-bg-color) hover:text-blue-100"
          >
            <MoonIcon className={clsx('w-5 h-5', theme === 'dark' ? 'text-(--hover-color)' : 'text-(--not-active-color)')} />
          </button>

        </div>
      </div>
    </div>
  );
}
