import { TemplateType, TemplateTypeConfig } from "@/types/template";
import { objectKeys } from "@/utils";
import { PreviewBlockConfig } from "./types/block";
import { Breakpoint, BreakpointConfig } from "./types/responsive";

export function registerPreviewBlocks(configurations: PreviewBlockConfig[]) {
  const configMap = configurations.reduce(
    (acc, config) => {
      if (acc[config.type]) {
        throw new Error(`Block type "${config.type}" already reigstered`);
      }

      acc[config.type] = config;
      return acc;
    },
    {} as Record<string, PreviewBlockConfig>
  );

  return {
    getConfig() {
      return configMap;
    },

    getBlock(type: string): PreviewBlockConfig | undefined {
      return configMap[type];
    },
  };
}

export const registerBreakpointConfig = (
  config: Record<Breakpoint, Omit<BreakpointConfig, "key">>
) => {
  return {
    getBreakpoint(key: Breakpoint) {
      return config[key];
    },

    getMediaQuery(key: Breakpoint) {
      return `@media (max-width: ${config[key].maxWidth}px) and (min-width: ${config[key].minWidth}px)`;
    },

    getBreakpoints(): BreakpointConfig[] {
      return objectKeys(config).reduce((acc, key) => {
        acc.push({
          key,
          ...config[key],
        });
        return acc;
      }, [] as BreakpointConfig[]);
    },
  };
};

export const registerTemplateTypes = (configurations: TemplateTypeConfig[]) => {
  const configMap = configurations.reduce(
    (acc, config) => {
      if (acc[config.key]) {
        throw new Error(`Template type "${config.key}" already reigstered`);
      }

      acc[config.key] = config;
      return acc;
    },
    {} as Record<TemplateType, TemplateTypeConfig>
  );

  return {
    getConfig() {
      return configMap;
    },

    getType(key: TemplateType) {
      return configMap[key];
    },

    getTypes() {
      return Object.values(configMap);
    },
  };
};
