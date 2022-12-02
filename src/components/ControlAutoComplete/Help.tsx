import { CountryInfo } from "../../api/apiService";
import React from "react";
import { FC } from "react";
import controllStore from "../../stores/controll-store";
export const Help: FC<CountryInfo> = ({ fullName, name, flag }) => {

  const handleCooseHelp = () => {
    controllStore.onValueChanged(name);
    controllStore.setSearchResult([]);
  };
  
  return (
    <div
      style={{
        border: "1px solid black",
        cursor: "pointer",
      }}
      onClick={handleCooseHelp}
    >
      <div>{name}</div>
      <div>{fullName}</div>
      <div>
        <img src={flag} alt="country flag" />
      </div>
    </div>
  );
};
