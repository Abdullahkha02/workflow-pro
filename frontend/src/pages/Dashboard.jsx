import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import RecentTasks from "../components/RecentTasks";

import {
    FaProjectDiagram,
    FaTasks,
    FaUsers,
    FaCheckCircle,
} from "react-icons/fa";

export default function Dashboard() {
    return (
        <DashboardLayout>
            {/* Welcome Section */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold">
                    Good Morning 👋
                </h1>

                <p className="text-gray-500 mt-2">
                    You have 8 tasks due today.
                </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Projects"
                    value="12"
                    icon={<FaProjectDiagram />}
                    color="text-blue-500"
                />

                <StatCard
                    title="Open Tasks"
                    value="48"
                    icon={<FaTasks />}
                    color="text-yellow-500"
                />

                <StatCard
                    title="Team Members"
                    value="9"
                    icon={<FaUsers />}
                    color="text-green-500"
                />

                <StatCard
                    title="Completed"
                    value="163"
                    icon={<FaCheckCircle />}
                    color="text-purple-500"
                />
            </div>

            {/* Recent Tasks Section */}
            <div className="mt-10">
                <RecentTasks />
            </div>
        </DashboardLayout>
    );
}