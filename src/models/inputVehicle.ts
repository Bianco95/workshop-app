export interface InputVehicle {
    type: "car" | "motorcycle" | "truck" | "boats" | "camper";
    licence_plate: string;
    brand: string;
    model: string;
}

export interface InputCar extends InputVehicle {
    steeringWheel: string;
    wheels:string[];
}

export interface InputMotorcycle extends InputVehicle {
    handlebars: string;
    wheels:string[];
}

export interface InputTruck extends InputVehicle {
    box: string;
    wheels:string[];
}

export interface InputBoats extends InputVehicle {
    sailBoat?: boolean;
    lenght: number;
    width: number;
    height: number;
}

export interface InputCamper extends InputVehicle {
    wheels:string[];
    length: number;
    width: number;
    luxury: boolean;
}