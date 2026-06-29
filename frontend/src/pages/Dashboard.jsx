import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
    return (
        <DashboardLayout>

            <h2 className="text-3xl font-bold mb-8">
                Welcome Back 👋
            </h2>

            <div className="grid grid-cols-4 gap-6">

                <StatCard
                    title="Active Projects"
                    value="12"
                />

                <StatCard
                    title="Open Tasks"
                    value="48"
                />

                <StatCard
                    title="Team Members"
                    value="9"
                />

                <StatCard
                    title="Completed"
                    value="163"
                />

            </div>

        </DashboardLayout>
    );
}