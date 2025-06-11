import { BorderControl } from "@/components/controls/border.control";
import { ColorControl } from "@/components/controls/color.control";
import { SliderUnitControl } from "@/components/controls/slider-unit.control";
import { SpacingControl } from "@/components/controls/spacing.control";
import { ToggleGroupControl } from "@/components/controls/toggle-group.control";
import { TypographyControl } from "@/components/controls/typography.control";
import { Accordion } from "@/components/shared/accordion";
import { Label } from "@/components/shared/label";
import { Separator } from "@/components/shared/separator";
import { SettingsType } from "@/types";
import { PseudoClass, Unit } from "@/types/style";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
} from "react-icons/ai";

const CountdownStyleControl = () => {
  return (
    <Accordion defaultValue="Boxes" type="single" collapsible>
      <Accordion.Item value="Boxes">
        <Accordion.Trigger className="p-4">Boxes</Accordion.Trigger>

        <Accordion.Content className="px-4">
          <SliderUnitControl
            label="ContainerWidth"
            type={SettingsType.BLOCK}
            fieldName="boxes.containerWidth"
            responsive
            units={[Unit.PX, Unit.EM, Unit.PERCENTAGE, Unit.REM]}
            className="mt-0"
          />

          <ColorControl
            type={SettingsType.BLOCK}
            fieldName="boxes.backgroundColor.default"
            label="Background Color"
          />

          <Separator className="my-4" />

          <BorderControl
            type={SettingsType.BLOCK}
            fieldName="boxes.border"
            mode={PseudoClass.DEFAULT}
          />

          <SliderUnitControl
            responsive
            label="Gap"
            type={SettingsType.BLOCK}
            fieldName="boxes.gap"
            units={[Unit.PX, Unit.REM, Unit.EM, Unit.PERCENTAGE]}
          />

          <SpacingControl
            responsive
            type={SettingsType.BLOCK}
            fieldName="boxes.padding"
            label="Padding"
            units={[Unit.PX, Unit.REM, Unit.EM, Unit.PERCENTAGE]}
          />
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="Content">
        <Accordion.Trigger className="p-4">Content</Accordion.Trigger>

        <Accordion.Content className="px-4">
          <Label className="font-semibold">Digits</Label>
          <ColorControl
            type={SettingsType.BLOCK}
            mode={PseudoClass.DEFAULT}
            fieldName="content.digits.color"
            label="Color"
          />

          <TypographyControl
            fieldName="content.digits.typography"
            type={SettingsType.BLOCK}
          />

          <Separator className="my-4" />

          <Label className="font-semibold">Label</Label>
          <ColorControl
            type={SettingsType.BLOCK}
            mode={PseudoClass.DEFAULT}
            fieldName="content.label.color"
            label="Color"
          />

          <TypographyControl
            fieldName="content.label.typography"
            type={SettingsType.BLOCK}
          />
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="Message">
        <Accordion.Trigger className="p-4">Message</Accordion.Trigger>

        <Accordion.Content className="px-4">
          {/* Alignment */}
          <ToggleGroupControl
            type={SettingsType.BLOCK}
            fieldName={"message.alignment"}
            label={"Alignment"}
            responsive
            controls={[
              {
                tooltipContent: "Left",
                toggleTrigger: <AiOutlineAlignLeft className="text-sm" />,
                value: "left",
              },
              {
                tooltipContent: "Center",
                toggleTrigger: <AiOutlineAlignCenter className="text-sm" />,
                value: "center",
              },
              {
                tooltipContent: "Right",
                toggleTrigger: <AiOutlineAlignRight className="text-sm" />,
                value: "right",
              },
            ]}
          />

          <ColorControl
            type={SettingsType.BLOCK}
            mode={PseudoClass.DEFAULT}
            fieldName="message.color"
            label="Color"
          />

          <TypographyControl
            fieldName="message.typography"
            type={SettingsType.BLOCK}
          />

          <SpacingControl
            responsive
            type={SettingsType.BLOCK}
            fieldName="message.padding"
            label="Padding"
            units={[Unit.PX, Unit.REM, Unit.EM, Unit.PERCENTAGE]}
          />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

export default CountdownStyleControl;
