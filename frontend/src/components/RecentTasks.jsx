const tasks = [
    "API Integration",
    "Landing Page",
    "Fix Login",
    "Deploy Backend",
];

export default function RecentTasks() {

    return (

        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-xl font-bold mb-5">
                Recent Tasks
            </h2>

            <ul className="space-y-4">

                {tasks.map((task) => (

                    <li
                        key={task}
                        className="border-b pb-2"
                    >
                        {task}
                    </li>

                ))}

            </ul>

        </div>

    );

}