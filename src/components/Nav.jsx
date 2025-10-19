import '../styles/nav.scss';
import { IoPerson, IoHammer, IoBriefcase } from "react-icons/io5";
import { FaFolderOpen, FaGraduationCap, FaLink, FaTrashCan, FaEye } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { IoMdInformationCircle } from "react-icons/io";
import { GoKebabHorizontal } from "react-icons/go";
import { VscOpenPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";

const navMenu = [
    {
        navIcon: <IoPerson />,
        link: '/personal_details',
        id: 0,
    },
    {
        navIcon: <FaLink />,
        link: '/links',
        id: 1,
    },
    {
        navIcon: <IoHammer />,
        link: '/technicial_skills',
        id: 2,
    },
    {
        navIcon: <IoBriefcase />,
        link: '/work_experience',
        id: 3,
    },
    {
        navIcon: <FaFolderOpen />,
        link: "/projects",
        id: 4,
    },
    {
        navIcon: <FaGraduationCap />,
        link: "/education",
        id: 5,
    },
    {
        navIcon: <GrCertificate />,
        link: "/certificate",
        id: 6,
    },
    {
        navIcon: <IoMdInformationCircle />,
        id: 7
    },
    {
        navIcon: <GoKebabHorizontal />,
        id: 8,
    }
]

const Nav = () => {

    return (
        <nav className="nav_menu">
            <ul className="top_nav_list nav_list">
                {
                    navMenu.map((navItems) => (
                        <li className="nav_items" key={navItems.id}>
                            <Link to={navItems.link}>{navItems.navIcon}</Link>
                        </li>
                    ))
                }
            </ul>

            <ul className="middle_nav_list nav_list">
                <li className="nav_items">
                    <Link to="/">
                        <VscOpenPreview />
                    </Link>
                </li>
            </ul>

            <ul className="bottom_nav_list nav_list">
                <li className="nav_items">
                    <Link to="/">
                        <FaTrashCan />
                    </Link>
                </li>
                <li className="nav_items">
                    <Link to="/">
                        <FaEye />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;