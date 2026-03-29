import type { GeoLocation } from "./GeoLocation";
import type { UUID } from "./shared";

type Category =
  | "museum"
  | "park"
  | "monument"
  | "restaurant"
  | "theater"
  | "historical site"
  | "shopping center"
  | "other";

interface Landmark {
  id: UUID;
  referenceId: string;
  name: string;
  category: Category;
  description: string;
  location: GeoLocation;
  distanceFromInMetres?: number;
  thumbnailUrl?: URL;
}

export type { Landmark };
