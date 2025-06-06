import { FC, useEffect, useState } from "react";
import { getIcons } from "@/utils";
import { IconBaseProps } from "react-icons";

export type RenderIconProps = {
  iconSet?: string;
  iconName?: string;
} & IconBaseProps;
export const RenderIcon: FC<RenderIconProps> = ({
  iconName,
  iconSet,
  ...props
}) => {
  const [icons, setIcons] = useState<any>();

  useEffect(() => {
    getIcons(iconSet ?? "fi").then((icons) => {
      setIcons(icons);
    });
  }, [iconSet]);

  const Icon = icons?.[iconName ?? ""];
  if (icons && iconSet && iconName && Icon) {
    return <Icon {...props}></Icon>;
  }
  return null;
};
