import type { GeoLocation } from "./GeoLocation";
import type { UUID } from "./shared";

interface Landmark {
	id: UUID;
	referenceId: string;
	name: string;
	description: string;
	location: GeoLocation;
	thumbnailUrl?: URL;
}

export type { Landmark };
