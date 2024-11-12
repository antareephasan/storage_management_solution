"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { sortTypes } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Sort = () => {
    const router = useRouter();
    const path = usePathname();
    const params = useSearchParams();
    const query = params.get("query") || "";

    const handleSort = (value: string) => {
        router.push(`${path}?query=${query}&sort=${value}`);
    }

    return (
        <Select onValueChange={handleSort} defaultValue={sortTypes[0].value}>
            <SelectTrigger className="sort-select">
                <SelectValue placeholder={sortTypes[0].label} />
            </SelectTrigger>
            <SelectContent className="sort-select-content">
                {sortTypes.map((sortType) => (
                    <SelectItem
                        className="shad-select-item"
                        key={sortType.value}
                        value={sortType.value}>
                        {sortType.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>

    )
}

export default Sort;