import {Skeleton} from "@/components/ui/skeleton";

export function SkeletonCard({count}: {count: number}) {
  if (count === 0) return null;
  return (
    <section className="mt-8">
      {/* 섹션 제목 자리 */}
      <Skeleton className="mb-3 h-5 w-40" />

      {/* 플래그 리스트 — 실제와 동일한 flex 레이아웃 */}
      <ul className="flex flex-wrap gap-3">
        {Array.from({length: count}).map((_, i) => (
          <li key={i} className="flex flex-col items-center gap-1">
            <Skeleton className="h-14 w-20 rounded" /> {/* 플래그 */}
            <Skeleton className="h-3 w-12" /> {/* 이름 */}
          </li>
        ))}
      </ul>
    </section>
  );
}
