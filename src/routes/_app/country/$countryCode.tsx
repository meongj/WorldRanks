import {NeighbouringCountries} from "@/components/NeighbouringCountries";
import {InfoList} from "@/components/ui/info-list";
import {SkeletonCard} from "@/components/ui/skeletonCard";
import {countryQueries} from "@/queries/countries";
import {Suspense} from "@suspensive/react";
import {useSuspenseQuery} from "@tanstack/react-query";
import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/_app/country/$countryCode")({
  component: CountryDetailPage,
});

function CountryDetailPage() {
  const {countryCode} = Route.useParams();
  const {data: country} = useSuspenseQuery(countryQueries.detail(countryCode));

  const language = Object.values(country.languages ?? {}).join(", ");
  const currencies = Object.values(country.currencies ?? {})
    .map((c) => c.name)
    .join(", ");

  return (
    <article>
      <img src={country.flags.svg} alt={country.flags.alt} className="mx-auto h-40 w-64 rounded-md object-cover" />
      <h1 className="mt-4 text-center text-2xl font-semibold">{country.name.common}</h1>
      <p className="text-center text-sm text-muted-foreground">{country.name.official}</p>

      <div className="my-6 flex gap-3">
        <p>Population | {country.population.toLocaleString()}</p>
        <p>Area(km²) | {country.area.toLocaleString()}</p>
      </div>

      <InfoList>
        <InfoList.Row label="Capital" value={country.capital} />
        <InfoList.Row label="Subregion" value={country.subregion} />
        <InfoList.Row label="Language" value={language} />
        <InfoList.Row label="Currencies" value={currencies} />
        <InfoList.Row label="Region" value={country.region} />
      </InfoList>

      {/* 인근 국가 */}
      {country.borders && country.borders.length > 0 && (
        <Suspense fallback={<SkeletonCard count={country.borders.length} />}>
          <NeighbouringCountries borders={country.borders} />
        </Suspense>
      )}
    </article>
  );
}
