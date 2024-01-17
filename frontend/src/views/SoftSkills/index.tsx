import { useQuery } from "@apollo/client";
import { Loader } from "components/atoms/Loader";
import {
  SoftSkill,
  SoftSkillsDocument,
  SoftSkillsQuery,
  SoftSkillsQueryVariables,
} from "generated/graphql";
import filterSkillByName from "libs/filterSkillByName";
import debounce from "lodash.debounce";
import { FC, useEffect, useRef, useState } from "react";
import List from "./List";
import Wrapper from "./Wrapper";
import "./styles.scss";
import type { HandleSearch } from "./types";

interface ISoftSkills {}

const SoftSkills: FC<ISoftSkills> = () => {
  const { data, loading, error } = useQuery<
    SoftSkillsQuery,
    SoftSkillsQueryVariables
  >(SoftSkillsDocument);

  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<SoftSkill[]>(data?.softSkills ?? []);

  const debounceRef = useRef(
    debounce((value: string) => {
      setSearch(value);
    }, 1000)
  );

  const handleSearch: HandleSearch = (value) => {
    if (debounceRef.current) debounceRef.current(value);
  };

  useEffect(() => {
    // NOTE: depending on the complexity and length of data,
    // a BE/DB search would likely be better

    // Filter by capitalization agnostic skill name
    if (data?.softSkills) {
      const filtered = filterSkillByName(data.softSkills, search);
      setResults(filtered);
    }
  }, [data, search]);

  if (loading) {
    return (
      <Wrapper handleSearch={handleSearch}>
        <Loader />
      </Wrapper>
    );
  }

  // Error or lack of data if loading is finished
  // This can be improved by letting the user know what
  // actions they can take to resolve the issue
  if (error || (!data && !loading)) {
    return (
      <Wrapper handleSearch={handleSearch}>
        <p>Something bad has happened 😔</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper handleSearch={handleSearch}>
      <List skills={results} />
    </Wrapper>
  );
};

export default SoftSkills;
