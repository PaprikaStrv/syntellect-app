import React, { FC } from "react";
import { useMemo } from "react";
import { Button, ButtonProps } from "../Button/Button";
import styles from "./ControlWithButtonsStyles.module.scss";
import { InputField } from "../InputField/InputField";

interface ControlWithButtonsProps {
  leftButtonsParams: ButtonProps[] | [];
  rightButtonsParams: ButtonProps[] | [];
}

export const ControlWithButtons: FC<ControlWithButtonsProps> = ({
  leftButtonsParams,
  rightButtonsParams,
}) => {
  const leftSideButtons = useMemo(
    () =>
      leftButtonsParams.map((button) => (
        <Button
          key={button.buttonText}
          buttonText={button.buttonText}
          callback={button.callback}
        />
      )),
    [leftButtonsParams]
  );
  const rightSideButtons = useMemo(
    () =>
      rightButtonsParams.map((button) => (
        <Button
          key={button.buttonText}
          buttonText={button.buttonText}
          callback={button.callback}
        />
      )),
    [rightButtonsParams]
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.controllContainer}>
        <div className={styles.sideButtons}>{leftSideButtons}</div>
        <InputField />
        <div className={styles.sideButtons}>{rightSideButtons}</div>
      </div>
    </div>
  );
};
