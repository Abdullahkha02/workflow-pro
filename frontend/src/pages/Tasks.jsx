export default function Tasks() {
    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Task Management</h1>

                <p className="text-gray-500 mt-2">
                    Manage all your workflow tasks here.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold mb-3">
                    My Tasks
                </h2>

                <p className="text-gray-500">
                    No tasks found.
                </p>
            </div>
        </div>
    );
}