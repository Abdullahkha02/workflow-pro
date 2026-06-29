import { Link } from "react-router-dom";
import {
    FaHome,
    FaProjectDiagram,
    FaTasks,
    FaCog,
} from "react-icons/fa";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white p-6">
            <h2 className="text-2xl font-bold mb-8">
                Workflow Pro
            </h2>

            <nav className="space-y-4">

                <Link
                    to="/dashboard"
                    className="flex items-center gap-3 hover:text-blue-400"
                >
                    <FaHome />
                    Dashboard
                </Link>

                <Link
                    to="/projects"
                    className="flex items-center gap-3 hover:text-blue-400"
                >
                    <FaProjectDiagram />
                    Projects
                </Link>

                <Link
                    to="/tasks"
                    className="flex items-center gap-3 hover:text-blue-400"
                >
                    <FaTasks />
                    Tasks
                </Link>

                <Link
                    to="/settings"
                    className="flex items-center gap-3 hover:text-blue-400"
                >
                    <FaCog />
                    Settings
                </Link>

            </nav>
        </aside>
    );
}