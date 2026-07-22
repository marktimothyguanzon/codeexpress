interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-200 border border-blue-500/30">
      {name}
    </span>
  );
}