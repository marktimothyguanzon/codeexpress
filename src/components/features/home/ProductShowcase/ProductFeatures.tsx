type Props = {
  features: string[];
};

export default function ProductFeatures({
  features,
}: Props) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">

      {features.map((feature) => (

        <div
          key={feature}
          className="flex items-center gap-3"
        >
          <div className="text-green-500">
            ✓
          </div>

          <span>{feature}</span>

        </div>

      ))}

    </div>
  );
}