import { ResponsiveValue } from "@/types/responsive";
import { LocalizedValue } from "@/types";
import {
  BorderFieldType,
  SpacingUnit,
  SpacingValue,
  TextStroke,
  TypographyType,
  UnitValue,
  WithPseudoClass,
} from "@/types/style";

export type CountdownSettingsType = {
  dueDate: number;
  view: "inline" | "block";
  showLabels: boolean;
  customLabels: boolean;
  labels: {
    days: {
      value: LocalizedValue<string>;
      show: boolean;
    };
    hours: {
      value: LocalizedValue<string>;
      show: boolean;
    };
    minutes: {
      value: LocalizedValue<string>;
      show: boolean;
    };
    seconds: {
      value: LocalizedValue<string>;
      show: boolean;
    };
  };
  expireMessage?: LocalizedValue<string>;
  boxes?: {
    containerWidth?: ResponsiveValue<UnitValue>;
    backgroundColor?: WithPseudoClass<string>;
    border?: BorderFieldType;
    gap?: ResponsiveValue<UnitValue>;
    padding?: ResponsiveValue<SpacingValue>;
  };
  content?: {
    digits?: {
      color: WithPseudoClass<string>;
      typography: TypographyType;
    };
    label?: {
      color: WithPseudoClass<string>;
      typography: TypographyType;
      textStroke?: TextStroke;
    };
  };
  message?: {
    alignment?: ResponsiveValue<"left" | "center" | "right">;
    color?: WithPseudoClass<string>;
    typography?: TypographyType;
    padding?: ResponsiveValue<SpacingValue>;
  };
};
