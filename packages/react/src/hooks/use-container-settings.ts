import { ContainerSettingsType } from "@/blocks/container/types";
import { BuilderConfiguration } from "@/config/builder.config";
import { useAppSelector } from "@/hooks/use-app-selector";
import { getActiveThemeContainerSettings } from "@/store/selectors";
import { BlockAdvancedSettings, BlockType } from "@/types/block";
import deepmerge from "deepmerge";

export const useContainerSettings = () => {
  const ContainerConfig = BuilderConfiguration.getBlock(BlockType.CONTAINER);

  if (!ContainerConfig) {
    console.warn("Container block configuration not found.");

    return {
      settings: {},
      advancedSettings: {},
    };
  }

  const themeContainerSettings = useAppSelector(getActiveThemeContainerSettings);

  const settings: ContainerSettingsType = {
    ...ContainerConfig.settings,
    width: deepmerge(ContainerConfig.settings.width ?? {}, themeContainerSettings?.width ?? {}),
    maxWidth: deepmerge(
      ContainerConfig.settings.maxWidth ?? {},
      themeContainerSettings?.maxWidth ?? {}
    ),
    gap: deepmerge(ContainerConfig.settings.gap ?? {}, themeContainerSettings?.gap ?? {}),
  };

  const advancedSettings: BlockAdvancedSettings = {
    ...ContainerConfig.advancedSettings,
    padding: deepmerge(
      ContainerConfig.advancedSettings?.padding ?? {},
      themeContainerSettings?.padding ?? {}
    ),
  };

  return { settings, advancedSettings };
};
