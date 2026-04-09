import {Search} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "./ui/input-group";

export function SearchInput() {
  return (
    <InputGroup className="max-w-xs ">
      <InputGroupInput placeholder="Search by Name, Regiin, Subregion" />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
}
