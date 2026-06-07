import Link from "next/link";

export default function Home() {
return ( <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">


  <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
          🏥 Healthcare Management Platform
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
          Modern Hospital
          <span className="block text-blue-600">
            Management System
          </span>
        </h1>

        <p className="mt-6 text-xl text-slate-600 leading-relaxed">
          Streamline healthcare operations with an
          all-in-one platform for doctors, patients,
          appointments, treatments, prescriptions,
          and notifications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/login"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg transition-all text-center"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold rounded-2xl transition-all text-center"
          >
            Register
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">

          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-xl">
              HMS Dashboard
            </h3>

            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-2xl p-5">
              <p className="text-sm text-slate-500">
                Doctors
              </p>

              <h4 className="text-3xl font-bold text-blue-600">
                
              </h4>
            </div>

            <div className="bg-green-50 rounded-2xl p-5">
              <p className="text-sm text-slate-500">
                Patients
              </p>

              <h4 className="text-3xl font-bold text-green-600">
                
              </h4>
            </div>
          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
              <span>Appointments</span>
              <span className="font-semibold text-blue-600">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
              <span>Treatments</span>
              <span className="font-semibold text-teal-600">
                Updated
              </span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
              <span>Notifications</span>
              <span className="font-semibold text-green-600">
                Real-Time
              </span>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 pb-20">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-slate-900">
        Powerful Healthcare Features
      </h2>

      <p className="text-slate-600 mt-4">
        Everything needed to manage a modern healthcare facility.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <div className="text-4xl mb-4">👨‍⚕️</div>
        <h3 className="font-bold text-xl mb-2">
          Doctor Management
        </h3>
        <p className="text-slate-600">
          Manage doctors, specialties, and healthcare staff efficiently.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <div className="text-4xl mb-4">👥</div>
        <h3 className="font-bold text-xl mb-2">
          Patient Records
        </h3>
        <p className="text-slate-600">
          Maintain secure patient profiles and medical information.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <div className="text-4xl mb-4">📅</div>
        <h3 className="font-bold text-xl mb-2">
          Appointments
        </h3>
        <p className="text-slate-600">
          Schedule and manage appointments seamlessly.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <div className="text-4xl mb-4">💊</div>
        <h3 className="font-bold text-xl mb-2">
          Prescriptions
        </h3>
        <p className="text-slate-600">
          Generate and manage digital prescriptions.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <div className="text-4xl mb-4">📋</div>
        <h3 className="font-bold text-xl mb-2">
          Treatments
        </h3>
        <p className="text-slate-600">
          Track treatment plans and patient progress.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <div className="text-4xl mb-4">🔔</div>
        <h3 className="font-bold text-xl mb-2">
          Notifications
        </h3>
        <p className="text-slate-600">
          Keep everyone informed with real-time alerts.
        </p>
      </div>

    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 pb-24">
    <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-12 text-center text-white">

      <h2 className="text-4xl font-bold mb-4">
        Ready to Transform Healthcare Management?
      </h2>

      <p className="text-blue-100 text-lg mb-8">
        Join HMS and simplify hospital operations with a modern healthcare platform.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/login"
          className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="px-8 py-4 bg-blue-700 rounded-2xl font-semibold"
        >
          Register
        </Link>
      </div>

    </div>
  </section>

</main>


);
}
