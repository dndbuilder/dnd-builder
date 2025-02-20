import { BlockGroup } from "@/types/block";
import { registerGroupConfig } from "@/core";

export const GroupConfiguration = registerGroupConfig([
  {
    label: BlockGroup.BASIC,
    order: 1,
  },
  {
    label: BlockGroup.LAYOUT,
    order: 2,
  },
  {
    label: BlockGroup.ECOMMERCE,
    order: 3,
  },
  {
    label: BlockGroup.SITE,
    order: 4,
  },
  {
    label: BlockGroup.ADVANCED,
    order: 5,
  },
  {
    label: BlockGroup.OTHERS,
    order: 6,
  },
]);
