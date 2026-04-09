import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "./ui/select";

export function SortSelect() {
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-2">Sort by</p>
      <Select>
        <SelectTrigger className="w-full border-border bg-background text-foreground  [&>span]:text-foreground">
          <SelectValue placeholder="Population" className="text-foreground" />
        </SelectTrigger>
        <SelectContent className="bg-background border-border text-foreground">
          <SelectGroup>
            <SelectItem value="population">Population</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="area">Area (km²)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
