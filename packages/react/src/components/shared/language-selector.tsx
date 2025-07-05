"use client";
import { Select } from "@/components/shared/select";
import { Tooltip } from "@/components/shared/tooltip";
import { setCurrentLanguage } from "@/store/builder-slice";
import { getCurrentLocale } from "@/store/selectors";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { classNames } from "@/utils";
import { FC } from "react";
import { FiCheck, FiGlobe } from "react-icons/fi";

const languages: Record<string, string>[] = [];

export const LanguageSelector: FC<{ className?: string }> = ({ className }) => {
  const currentLocale = useAppSelector(getCurrentLocale);

  const dispatch = useAppDispatch();

  const languageMap = languages.reduce(
    (acc, lang) => {
      acc[lang.code] = lang.name;
      return acc;
    },
    {} as Record<string, string>
  );

  const currentLocaleName = languageMap[currentLocale];

  if (languages.length === 0) {
    return null; // No languages available
  }

  return (
    <Select
      onValueChange={(val: string) => {
        dispatch(setCurrentLanguage(val));
      }}
      value={currentLocale}
      defaultValue={"en"}
    >
      <Select.Trigger
        className={classNames(
          "h-3 w-[40px] border-0 p-1 focus:ring-0 focus:ring-offset-0",
          className
        )}
        chevronDown={false}
      >
        <Tooltip>
          <Tooltip.Trigger asChild>
            <span className="flex items-center gap-1">
              <FiGlobe />
              {currentLocale.toLocaleUpperCase()}
            </span>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">
            {currentLocaleName} ({currentLocale.toLocaleUpperCase()})
          </Tooltip.Content>
        </Tooltip>
      </Select.Trigger>

      <Select.Content sideOffset={-23} className="min-w-[30px] border-0" align="end">
        <Select.Group>
          {languages.map((lang) => (
            <Select.Item
              key={lang.code}
              className="flex py-2 pe-3 ps-3"
              value={lang.code}
              showCheck={false}
            >
              <span className="flex items-center gap-2">
                {lang.name} ({lang.code.toLocaleUpperCase()})
                {currentLocale === lang.code && <FiCheck />}
              </span>
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select>
  );
};
