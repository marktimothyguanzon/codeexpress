import CountUp from "react-countup";

type Props = {
  label: string;
  value: number;
};

export default function Stats({ label, value }: Props) {
  return (
    <div className="rounded-xl bg-slate-100 p-4 text-center shadow-sm">
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-blue-600">
        <CountUp
          end={value}
          duration={2}
        />
      </h2>
    </div>
  );
}