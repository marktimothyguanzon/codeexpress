import {
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

export default function ContactInfo() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-3">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <FiMail
          size={40}
          className="mx-auto text-blue-400"
        />

        <h3 className="mt-6 text-xl font-bold text-white">
          Email
        </h3>

        <p className="mt-3 text-slate-300">
          info@codeexpress.com
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <FiPhone
          size={40}
          className="mx-auto text-green-400"
        />

        <h3 className="mt-6 text-xl font-bold text-white">
          Phone
        </h3>

        <p className="mt-3 text-slate-300">
          +63 XXX XXX XXXX
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <FiMapPin
          size={40}
          className="mx-auto text-red-400"
        />

        <h3 className="mt-6 text-xl font-bold text-white">
          Office
        </h3>

        <p className="mt-3 text-slate-300">
          Kabankalan City,
          Negros Occidental,
          Philippines
        </p>
      </div>

    </div>
  );
}