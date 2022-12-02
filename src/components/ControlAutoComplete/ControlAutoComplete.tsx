import React, { useMemo } from "react";
import { FC } from "react";
import { InputField } from "../InputField/InputField";
import controllStore from "../../stores/controll-store";
import { observer } from "mobx-react";
import { Help } from "./Help";

interface ControlAutoCompleteProps {
  maxHelps: number;
}

export const ControlAutoComplete: FC<ControlAutoCompleteProps> = observer(
  ({ maxHelps }) => {
    const isHelpsLoading = controllStore.isSearchResultLoading;

    const helps = useMemo(
      () =>
        controllStore.searchResults
          .slice(0, maxHelps)
          .map((help) => (
            <Help
              key={help.flag}
              name={help.name}
              fullName={help.fullName}
              flag={help.flag}
            />
          )),
      [controllStore.searchResults]
    );

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div>
          <InputField autocomplete />
          {isHelpsLoading ? (
            <div>Loading...</div>
          ) : (
            <div
              style={{
                maxHeight: "400px",
                overflow: "auto",
              }}
            >
              {helps}
            </div>
          )}
        </div>
      </div>
    );
  }
);
