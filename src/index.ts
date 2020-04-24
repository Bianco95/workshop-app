import { BusinessOwner } from './models/businessOwner';
import { AppManager } from './classes/appManager';
import { Client } from './models/clients';
import { Vehicles } from './classes/vehicles';
import { Car } from './classes/car';
import { WorkShop } from './classes/workshop';

export type InputVehicleType = InputMotorcycle | InputCar;

export interface InputVehicle{
    license_plate : string;
    brand : string;
    model : string;
}
export interface InputMotorcycle extends InputVehicle{
    type: "moto";
    brand_manubrio : string;
}
export interface InputCar extends InputVehicle{
    type: "car";
    brand_volante : string;
}

let client1:Client = {
    email    : "giulio.bianchini@hotmail.it",
    lastname : "Bianchini",
    name     : "Giulio",
    phonenumber : "3480069189",
    vehicles: []
}

let garage = new WorkShop("Frankie Garage")

let newVehicle : InputCar = {
    type: "car",
    brand : "toyota",
    brand_volante : "suzuki",
    license : "PQART",
}

garage.getManager().addVehicles(garage.getVehicles(), newVehicle)
garage.getManager().


