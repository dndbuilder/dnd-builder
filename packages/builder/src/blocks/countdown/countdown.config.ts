import { createBlockConfig } from "@/utils";
import { CountdownSettingsType } from "./types";
import { BlockGroup, BlockType } from "@/types/block";
import CountdownContentControl from "./components/countdown-content.control";
import CountdownStyleControl from "./components/countdown-style.control";
import { PiClockCountdownLight } from "react-icons/pi";
import { Unit } from "../../types/style";
import {
  generateBorderRadius,
  generateBorderWidth,
  generateResponsiveStyle,
  generateSpacingValue,
  generateTypography,
  generateUnitValue,
} from "@/utils/style";
import { lazy } from "react";

const CountdownConfig = createBlockConfig<CountdownSettingsType>({
  type: BlockType.COUNTDOWN,
  label: "Countdown",
  component: lazy(() => import("./components/countdown.block")),
  icon: PiClockCountdownLight,
  group: BlockGroup.ADVANCED,
  settings: {
    dueDate: Date.now() + 1000 * 60 * 60 * 24 * 15,
    view: "inline",
    showLabels: true,
    customLabels: false,
    labels: {
      days: {
        value: { en: "Days" },
        show: true,
      },
      hours: {
        value: { en: "Hours" },
        show: true,
      },
      minutes: {
        value: { en: "Minutes" },
        show: true,
      },
      seconds: {
        value: { en: "Seconds" },
        show: true,
      },
    },
    expireMessage: { en: "Completed" },
    boxes: {
      containerWidth: {
        desktop: {
          value: 100,
          unit: Unit.PERCENTAGE,
        },
        tablet: {
          value: 100,
          unit: Unit.PERCENTAGE,
        },
        mobile: {
          value: 100,
          unit: Unit.PERCENTAGE,
        },
      },
      gap: {
        desktop: {
          unit: Unit.REM,
          value: 1,
        },
        tablet: {
          unit: Unit.REM,
          value: 1,
        },
        mobile: {
          unit: Unit.REM,
          value: 1,
        },
      },
      padding: {
        desktop: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
          unit: Unit.REM,
          linked: true,
        },
        tablet: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
          unit: Unit.REM,
          linked: true,
        },
        mobile: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
          unit: Unit.REM,
          linked: true,
        },
      },
    },
    message: {
      alignment: {
        desktop: "center",
        tablet: "center",
        mobile: "center",
      },
      padding: {
        desktop: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
          unit: Unit.REM,
          linked: true,
        },
        tablet: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
          unit: Unit.REM,
          linked: true,
        },
        mobile: {
          top: 1,
          right: 1,
          bottom: 1,
          left: 1,
          unit: Unit.REM,
          linked: true,
        },
      },
    },
  },
  style: ({ settings, breakpoints }) => {
    return {
      ".countdown-block": {
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
        ...generateResponsiveStyle(breakpoints, (breakpoint) => {
          return {
            width: generateUnitValue(
              settings.boxes?.containerWidth?.[breakpoint]
            ),
          };
        }),
        ".countdown-display": {
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          ...generateResponsiveStyle(breakpoints, (breakpoint) => {
            return {
              gap: generateUnitValue(settings.boxes?.gap?.[breakpoint]),
            };
          }),
          width: "100%",
          ".countdown-item": {
            textAlign: "center",
            backgroundColor: settings.boxes?.backgroundColor?.default,
            ...generateBorderRadius(settings.boxes?.border?.radius?.default),
            ...generateBorderWidth(
              settings.boxes?.border?.width?.desktop?.default
            ),
            borderStyle: Boolean(settings.boxes?.border?.type?.default)
              ? settings.boxes?.border?.type?.default
              : undefined,
            borderColor: settings.boxes?.border?.color?.default,
            ...generateResponsiveStyle(breakpoints, (breakpoint) => {
              const {
                top: paddingTop,
                right: paddingRight,
                bottom: paddingBottom,
                left: paddingLeft,
              } = generateSpacingValue(settings.boxes?.padding?.[breakpoint]);
              return {
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
              };
            }),
            ".countdown-digits, .countdown-label": {
              display: settings.view === "block" ? "block" : "inline",
            },
            ".countdown-digits": {
              color: settings.content?.digits?.color?.default,
              ...generateTypography(
                breakpoints,
                settings.content?.digits?.typography
              ),
            },
            ".countdown-label": {
              color: settings.content?.label?.color?.default,
              ...generateTypography(
                breakpoints,
                settings.content?.label?.typography
              ),
            },
          },
        },

        ".expire-message": {
          color: settings.message?.color?.default,
          ...generateTypography(breakpoints, settings.message?.typography),
          ...generateResponsiveStyle(breakpoints, (breakpoint) => {
            const {
              top: paddingTop,
              right: paddingRight,
              bottom: paddingBottom,
              left: paddingLeft,
            } = generateSpacingValue(settings.message?.padding?.[breakpoint]);
            return {
              textAlign: settings.message?.alignment?.[breakpoint],
              paddingTop,
              paddingRight,
              paddingBottom,
              paddingLeft,
            };
          }),
        },
      },
    };
  },
  controls: [
    {
      label: "Content",
      component: CountdownContentControl,
    },
    {
      label: "Style",
      component: CountdownStyleControl,
    },
  ],
});

export default CountdownConfig;
