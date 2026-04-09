import {Region} from "@/types/country";
import {Button} from "./ui/button";

const REGIONS: Region[] = ["Americas", "Antarctic", "Africa", "Asia", "Europe", "Oceania"];

export function ButtonFilter() {
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-2">Region</p>
      <div className="flex flex-wrap gap-2">
        {REGIONS.map((region) => (
          <Button key={region} variant="chip" size="lg" data-active="">
            {region}
          </Button>
        ))}
      </div>
    </div>
  );
}
