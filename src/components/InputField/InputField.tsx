import controllStore from "../../stores/controll-store";
import { observer } from "mobx-react";
import React, { useMemo } from "react";
import { FC } from "react";
import useDebouncedFunction from "../../hooks/useDebounce";
import { getCountryByName } from "../../api/apiService";
import { useState } from "react";
import { getCountryByNameRequest } from "../../stores/getContryNameRequest";

export const InputField: FC<{ autocomplete?: boolean }> = observer(
  ({ autocomplete }) => {
    const debouncedRequest = useDebouncedFunction(
      (value: string) => getCountryByNameRequest(value),
      500
    );

    const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
      controllStore.onValueChanged(event.currentTarget.value);
      if (autocomplete) {
        debouncedRequest(event.currentTarget.value);
      }
    };

    return (
      <div>
        <input
          type={"text"}
          value={controllStore.value}
          onChange={onInputChange}
          style={{
            padding: "16px",
            border: "1px solid black",
            fontSize: "20px",
          }}
        />
      </div>
    );
  }
);
