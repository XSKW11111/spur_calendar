import dynamic from "next/dynamic";

export default function Home() {
  const SpurCalendar = dynamic(() => import("@/components/SpurCalendar"), {
    ssr: false,
  });
  return (
    <div className="w-full box-border px-6">
        <SpurCalendar />
    </div>
  );
}
