import { Vehicles } from "./vehicles";

export interface Client{
    name: string;
    lastname: string;
    phonenumber: string;
    email: string;
    vehicles: Vehicles[];
}