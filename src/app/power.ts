import { Hero } from "./hero";

export interface Power {
    id: number;
    name: string;
    description: string;
    hero?: Hero;
}