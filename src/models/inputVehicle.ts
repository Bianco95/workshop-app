export interface InputVehicle {
    type: "car" | "motorcycle" | "truck";
    licence_plate: string;
    brand: string;
    model: string;
}

export interface InputCar extends InputVehicle {
    volante: string;
}

export interface InputMotorcycle extends InputVehicle {
    manubrio: string;
}

export interface InputTruck extends InputVehicle {
    cassone: string;
}