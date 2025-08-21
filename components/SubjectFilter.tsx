"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("topic") || "";

  const [selectedQuery, setselectedQuery] = useState("");
  const handleSelectChange = (value: string) => {
    setselectedQuery(value);
      console.log(1)
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: value,
      });
      router.push(newUrl, { scroll: false });
  };

  return (
    <Select onValueChange={handleSelectChange} value={selectedQuery}>
      <SelectTrigger className="input">
        <SelectValue placeholder="Select the voice" />
      </SelectTrigger>
      <SelectContent>
        {subjects.map((subject) => (
          <SelectItem value={subject} key={subject}>
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
