interface Props {
  title: string;
  value: number | string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl bg-[#121821] border border-white/10 p-6">

      <p className="text-gray-400">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold text-orange-500">
        {value}
      </h2>

    </div>
  );
}