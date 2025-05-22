import { NavLink } from 'react-router-dom';
import NavLinks from './nav-links';
import ThemeToggle from './theme-toggle';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <NavLink
        className="mb-2 flex h-[60px] items-end justify-start rounded-md bg-blue-500 p-4 md:h-24 text-white"
        to="/"
      >
        <div className="w-32 text-(--secondary-font-color) md:w-40">
          <h1 className="text-2xl font-normal italic">
            Plus UI
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
        <div className="hidden h-auto w-full grow rounded-md bg-neutral-200 dark:bg-neutral-900 md:block"></div>
        <ThemeToggle />
      </div>
    </div>
  );
}
