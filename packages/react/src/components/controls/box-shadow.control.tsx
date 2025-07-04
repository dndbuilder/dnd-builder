"use client";

import { Input } from "@/components/shared/input";
import { Popover } from "@/components/shared/popover";
import { BsFillSquareFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";

import { ColorPicker } from "@/components/shared/color-picker";
import { Label } from "@/components/shared/label";
import { Select } from "@/components/shared/select";
import { useAppSelector } from "@/hooks/use-app-selector";
import { useSettings } from "@/hooks/use-settings";
import { getCurrentBreakpoint } from "@/store/selectors";
import { SettingsType } from "@/types";
import { BoxShadow } from "@/types/style";
import { classNames } from "@/utils";
import { FC, HTMLAttributes } from "react";
import { BreakpointSelector } from "../shared/breakpoint-selector";

export type BoxShadowControlProps = {
  mode?: string;
  fieldName?: string;
  label?: string;
  responsive?: boolean;
  type: SettingsType;
} & HTMLAttributes<HTMLDivElement>;

export const BoxShadowControl: FC<BoxShadowControlProps> = ({
  mode,
  className,
  responsive,
  fieldName = "boxShadow",
  label = "Box Shadow",
  type,
}) => {
  const currentBreakpoint = useAppSelector(getCurrentBreakpoint);
  const [boxShadow, setBoxShadow] = useSettings<BoxShadow | undefined>(
    responsive && mode
      ? `${fieldName}.${currentBreakpoint}.${mode}`
      : responsive
        ? `${fieldName}.${currentBreakpoint}`
        : mode
          ? `${fieldName}.${mode}`
          : fieldName,
    type
  );

  // const boxShadow = boxShadow ?? {
  //   color: "#ddd",
  //   horizontal: 0,
  //   vertical: 0,
  //   blur: 0,
  //   spread: 0,
  //   position: "",
  // };

  // const debouncedChangeHandler = useCallback(
  //   debounce((val, field) => {
  //     // Update the value in the store
  //     setBoxShadow({
  //       ...boxShadow,
  //       [field]: val,
  //     });
  //   }, 300),
  //   []
  // );

  // useEffect(() => {
  //   // Cleanup the debounced function on component unmount
  //   return () => {
  //     debouncedChangeHandler.cancel();
  //   };
  // }, [debouncedChangeHandler]);

  const handleValueChange = (val: number | string | undefined, field: string) => {
    // debouncedChangeHandler(val, field);
    // setBoxShadow({
    //   // ...boxShadow,
    //   [field]: val,
    // });

    setBoxShadow((prev) => ({
      ...prev,
      [field]: val,
    }));
  };

  return (
    <div className={classNames("mt-4 flex justify-between", className)}>
      {label && (
        <Label className="flex items-center gap-1">
          {label} {responsive && <BreakpointSelector />}
        </Label>
      )}

      {/* Popover */}
      <Popover>
        <Popover.Trigger asChild>
          <button className="rounded border bg-gray-50 px-3 py-1.5 transition-colors duration-200 hover:bg-gray-300">
            <CiEdit />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content align="end" alignOffset={-8} className="w-[260px] bg-white p-4">
            {/* Color */}
            <div className="flex items-center justify-between">
              <Label>Color</Label>
              <Popover>
                <Popover.Trigger className="rounded-xs border p-1">
                  <BsFillSquareFill style={{ color: boxShadow?.color }} className="rounded-xs" />
                </Popover.Trigger>
                <Popover.Content className="p-0">
                  <p className="px-4 py-3 shadow-md">Color Picker</p>
                  <div className="p-4">
                    <ColorPicker
                      color={boxShadow?.color}
                      onChange={(val) => {
                        setBoxShadow({
                          ...boxShadow,
                          color: val,
                        });
                      }}
                    />
                  </div>
                </Popover.Content>
              </Popover>
            </div>
            {/* Shadow Controls Grid */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {/* Horizontal */}
              <div>
                <Label className="mb-1.5 block text-xs text-gray-800">Horizontal</Label>
                <Input
                  type="number"
                  value={boxShadow?.horizontal ?? ""}
                  min={-100}
                  max={100}
                  className="w-full"
                  onChange={(e) => {
                    handleValueChange(Number(e.target.value), "horizontal");
                  }}
                />
              </div>

              {/* Vertical */}
              <div>
                <Label className="mb-1.5 block text-xs text-gray-800">Vertical</Label>
                <Input
                  type="number"
                  value={boxShadow?.vertical ?? ""}
                  onChange={(e) => {
                    handleValueChange(Number(e.target.value), "vertical");
                  }}
                  min={-100}
                  max={100}
                  className="w-full"
                />
              </div>

              {/* Blur */}
              <div>
                <Label className="mb-1.5 block text-xs text-gray-800">Blur</Label>
                <Input
                  type="number"
                  value={boxShadow?.blur ?? ""}
                  onChange={(e) => {
                    handleValueChange(Number(e.target.value), "blur-sm");
                  }}
                  min={0}
                  max={100}
                  className="w-full"
                />
              </div>

              {/* Spread */}
              <div>
                <Label className="mb-1.5 block text-xs text-gray-800">Spread</Label>
                <Input
                  type="number"
                  value={boxShadow?.spread ?? ""}
                  onChange={(e) => {
                    handleValueChange(Number(e.target.value), "spread");
                  }}
                  min={0}
                  max={100}
                  className="w-full"
                />
              </div>
            </div>

            {/* Position */}
            <div className="mt-4 grid grid-cols-2 items-center gap-1.5">
              <Label>Position</Label>
              <Select
                value={boxShadow?.position || "select"}
                onValueChange={(val) => {
                  handleValueChange(val, "position");
                }}
              >
                <Select.Trigger>
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="outset">Outset</Select.Item>
                  <Select.Item value="inset">Inset</Select.Item>
                </Select.Content>
              </Select>
            </div>

            {/* Arrow */}
            <Popover.Arrow width={16} height={8} fill="white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover>
    </div>
  );
};
