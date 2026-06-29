import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="flex justify-between items-center bg-white shadow px-8 py-4 rounded-lg mb-8">
            <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>

            <div className="flex items-center gap-6">
                <FaBell size={20} className="cursor-pointer text-gray-600" />

                <div className="flex items-center gap-2">
                    <FaUserCircle size={32} />
                    <span className="font-medium">
                        Abdullah
                    </span>
                </div>
            </div>
        </header>
    );
}