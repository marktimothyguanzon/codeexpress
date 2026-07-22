import {
  FiBarChart2,
  FiUsers,
  FiCheckCircle,
  FiBriefcase,
} from "react-icons/fi";


export default function Dashboard() {
  return (
    <div className="h-full w-full bg-slate-50 rounded-xl overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 py-5 flex flex-col items-center">

  <h2 className="mt-3 text-sm font-bold text-white">
          CodeExpress Dashboard
        </h2>

        <p className="text-blue-100 text-sm">
          Building Technology. Empowering People. Transforming Communities.
        </p>

      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4 p-5">

        <div className="rounded-xl bg-white p-4 shadow-md">
          <FiBarChart2 size={15} className="text-blue-600 mb-2" />
          <p className="text-gray-500 text-sm">Revenue</p>
          <h3 className="text-sm font-bold">₱245K</h3>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-md">
          <FiBriefcase size={15} className="text-green-600 mb-2" />
          <p className="text-gray-500 text-sm">Projects</p>
          <h3 className="text-sm font-bold">18</h3>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-md">
          <FiUsers size={15} className="text-purple-600 mb-2" />
          <p className="text-gray-500 text-sm">Clients</p>
          <h3 className="text-sm font-bold">12</h3>
        </div>

        <div className="rounded-xl bg-white p-4 shadow-md">
          <FiCheckCircle size={15} className="text-orange-500 mb-2" />
          <p className="text-gray-500 text-sm">Success Rate</p>
          <h3 className="text-sm font-bold">99%</h3>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="px-5 pb-5">

        <h3 className="font-semibold mb-3">
          Recent Activity
        </h3>

        <div className="space-y-2 text-sm">

          <div>✅ Payroll Management System</div>

          <div>✅ Hotel Management System</div>

          <div>✅ School Information System</div>

        </div>

      </div>

    </div>
  );
}