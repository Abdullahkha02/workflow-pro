export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-xl shadow-lg w-[420px]">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Workflow Pro
                </h1>

                <input
                    className="border p-3 rounded w-full mb-4"
                    placeholder="Email"
                />

                <input
                    type="password"
                    className="border p-3 rounded w-full mb-6"
                    placeholder="Password"
                />

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                    Login
                </button>
            </div>
        </div>
    );
}