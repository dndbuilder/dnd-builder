import { FC, useEffect, useState } from "react";
import { getIcons } from "@/utils";
import { IconBaseProps } from "react-icons";

type Props = {
  iconSet?: string;
  iconName?: string;
} & IconBaseProps;
const RenderIcon: FC<Props> = ({ iconName, iconSet, ...props }) => {
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

export default RenderIcon;
