import { InputControl } from "@/components/controls/input.control";
import { SelectControl } from "@/components/controls/select.control";
import { SwitchControl } from "@/components/controls/switch.control";
import { TextareaControl } from "@/components/controls/textarea.control";
import { Accordion } from "@/components/shared/accordion";
import { InfoMessage } from "@/components/shared/info-message";
import { Label } from "@/components/shared/label";
import { Separator } from "@/components/shared/separator";
import { useSettings } from "@/hooks/use-settings";
import { SettingsType } from "@/types";
import Flatpickr from "react-flatpickr";

const CountdownContentControl = () => {
  const [dueDate, setDuedate] = useSettings<number>(
    "dueDate",
    SettingsType.BLOCK
  );
  const [customLabels] = useSettings<boolean>(
    "customLabels",
    SettingsType.BLOCK
  );

  return (
    <Accordion defaultValue="Countdown" type="single" collapsible>
      <Accordion.Item value="Countdown">
        <Accordion.Trigger className="p-4">Countdown</Accordion.Trigger>

        <Accordion.Content className="px-4 pb-20">
          <Label className="flex flex-1 items-center gap-1 mb-1.5">
            Due Date
          </Label>

          <Flatpickr
            data-enable-time
            value={dueDate}
            className="h-[28px] w-full rounded border border-dark-300 px-2 text-xs text-dark-700"
            onChange={([date]) => {
              setDuedate(date.getTime());
            }}
          />
          <InfoMessage>Date set according to your local timezone.</InfoMessage>

          <TextareaControl
            fieldName="expireMessage"
            label="Expire Message"
            type={SettingsType.BLOCK}
            isLocalized
          />

          <SelectControl
            options={[
              { value: "inline", content: "Inline" },
              { value: "block", content: "Block" },
            ]}
            type={SettingsType.BLOCK}
            fieldName={"view"}
            label={"View"}
          ></SelectControl>

          <SwitchControl
            fieldName="labels.days.show"
            label="Days"
            type={SettingsType.BLOCK}
          />
          <SwitchControl
            fieldName="labels.hours.show"
            label="Hours"
            type={SettingsType.BLOCK}
          />
          <SwitchControl
            fieldName="labels.minutes.show"
            label="Minutes"
            type={SettingsType.BLOCK}
          />
          <SwitchControl
            fieldName="labels.seconds.show"
            label="Seconds"
            type={SettingsType.BLOCK}
          />

          <Separator className="my-4" />

          <SwitchControl
            fieldName="showLabels"
            label="Show Labels"
            type={SettingsType.BLOCK}
          />
          <SwitchControl
            fieldName="customLabels"
            label="Custom Labels"
            type={SettingsType.BLOCK}
          />

          {customLabels && (
            <>
              <InputControl
                fieldName="labels.days.value"
                label="Days"
                type={SettingsType.BLOCK}
                isLocalized
              />
              <InputControl
                fieldName="labels.hours.value"
                label="Hours"
                type={SettingsType.BLOCK}
                isLocalized
              />
              <InputControl
                fieldName="labels.minutes.value"
                label="Minutes"
                type={SettingsType.BLOCK}
                isLocalized
              />
              <InputControl
                fieldName="labels.seconds.value"
                label="Seconds"
                type={SettingsType.BLOCK}
                isLocalized
              />
            </>
          )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

export default CountdownContentControl;
