import { FaPlus, FaSearch } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";

interface SubmenuRoute {
    name: string;
    path: string;
}

function NavBar() {
    return (
        <div className="top-0 left-0 z-50 w-full bg-c-midnight-zone">
            <nav className="flex justify-between py-8 bg-c-midnight-zone h-14 wrapper-container">
                <ul className="flex items-center justify-start h-full gap-8 font-medium text-white">
                    <Link to="/" className="w-40">
                        <img src="/src/shared/assets/tmdb.png" alt="logo" />
                    </Link>
                    <MenuItemWithSubmenu
                        name="Movies"
                        submenuItems={[
                            { name: "Popular", path: "/popular-movies" },
                            { name: 'Now Playing', path: 'nowplaying-movies' },
                            { name: 'Upcoming', path: '#' },
                            { name: 'Top Rated', path: 'top-rated-movies' }
                        ]}
                    />
                    {/* <MenuItemWithSubmenu
                        name="TV Shows"
                        submenuItems={[{ name: "#", path: "#" }]}
                    />
                    <MenuItemWithSubmenu
                        name="People"
                        submenuItems={[{ name: '#', path: '#' }]}
                    />
                    <MenuItemWithSubmenu
                        name="More"
                        submenuItems={[{ name: '#', path: '#' }]}
                    /> */}
                </ul>
                <ul className="flex items-center h-full gap-8 text-white">
                    {/* <FaPlus />
                    <GrLanguage />
                    <li>
                        <a href="/">Login</a>
                    </li>
                    <li>
                        <a href="/">Join TMBD</a>
                    </li>
                    <FaSearch className="text-c-cyan" /> */}
                </ul>
            </nav>
        </div>
    );
}

function MenuItemWithSubmenu({
    name,
    submenuItems,
}: {
    name: string;
    submenuItems: SubmenuRoute[];
}) {
    return (
        <li className="relative group">
            <a>{name}</a>
            <ul className="absolute left-0 z-50 hidden py-2 mt-0 text-sm font-light text-black bg-white border rounded-lg shadow-sm w-36 group-hover:block">
                {submenuItems.map((item, index) => (
                    <li key={index} className="px-4 py-1 hover:bg-gray-200">
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default NavBar;