export const FLAVOURS = [
  "Raspberry",
  "Blueberry",
  "Blackberry",
  "Strawberry",
  "Gooseberry",
  "Cloudberry",
] as const;

export type Flavour = (typeof FLAVOURS)[number];
