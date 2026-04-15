import {countryQueries} from "@/queries/countries";
import {useSuspenseQuery} from "@tanstack/react-query";
import {Link} from "@tanstack/react-router";

interface Props {
  borders: string[];
}

export function NeighbouringCountries({borders}: Props) {
  // 국가코드로 인접국가 상세정보 조회
  const {data: countries} = useSuspenseQuery(countryQueries.borders(borders));

  return (
    <section className="mt-8">
      <h3 className="mb-3 text-sm text-muted-foreground">Neighbouring Countries</h3>
      <ul className="flex flex-wrap gap-3">
        {countries.map((c) => (
          <li key={c.cca3}>
            <Link
              to="/country/$countryCode"
              params={{countryCode: c.cca3}}
              className="flex flex-col items-center gap-1 hover:opacity-80">
              <img src={c.flags.png} alt={c.flags.alt ?? c.name.common} className="h-14 w-20 rounded object-cover" />
              <span className="text-xs">{c.name.common}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
