import { TextInputField } from "components/molecules/TextInputField";

import { FC, ReactNode, useEffect, useState } from "react";
import { HandleSearch } from "../types";

interface IWrapper {
  children: ReactNode;
  handleSearch: HandleSearch;
}

const Wrapper: FC<IWrapper> = ({ children, handleSearch }) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    handleSearch(value);
  }, [handleSearch, value]);

  return (
    <div className="soft-skills">
      <div className="soft-skills__content">
        <h1 className="soft-skills__title">Soft Skills</h1>
        <form className="soft-skilss__actions" role="search" name="search-form">
          <TextInputField
            id="search"
            label="Search"
            placeholder="Attracted to ducks"
            onChange={(value) => setValue(value)}
            value={value}
          />
        </form>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
