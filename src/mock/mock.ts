import { InputCar } from "../models/inputVehicle";
import { Client } from "../models/client";
import { BusinessOwner } from "../models/ businessOwner";

const carInput: InputCar = {
    licence_plate: "car1",
    brand: "Fiat",
    model: "500",
    type: "car",
    steeringWheel: "Pelle"
};

const carInput2: InputCar = {
    licence_plate: "car2",
    brand: "Citroen",
    model: "C3",
    type: "car",
    steeringWheel: "Brutto"
};

const carInput3: InputCar = {
    licence_plate: "CCUUAA",
    brand: "Fiat",
    model: "Alfa Romeo Giulietta",
    type: "car",
    steeringWheel: "Spacca"
};

const carInput4: InputCar = {
    licence_plate: "CCUUAA",
    brand: "Fiat",
    model: "Lamborghini",
    type: "car",
    steeringWheel: "Spacca"
};

const carInput5: InputCar = {
    licence_plate: "CCUUAA",
    brand: "Fiat",
    model: "Gallardo",
    type: "car",
    steeringWheel: "rigido"
};

const client: Client = {
    email  : "pippo@baudo.it",
    lastname : "baudo",
    name : "pippo",
    phoneNumber : "3480069189",
    vehicles : [carInput, carInput2]
}

const clientArmaDeiCarabinieri: Client = {
    email  : "carabinieri.arma@carabinieri.it",
    lastname : "carabinieri",
    name : "arma dei carabinieri",
    phoneNumber : "113",
    vehicles : [carInput3, carInput4, carInput5]
}

const businessOwner: BusinessOwner = {
    name: "Arturo",
    surname: "Lebuche",
    username: "Arturo90"
}

const businessOwner2: BusinessOwner = {
    name: "bracco",
    surname: "baldo",
    username: "braccobaldo"
}

export const clients = [client, clientArmaDeiCarabinieri];
export const businessOwners = [businessOwner, businessOwner2];
export const inputVehicles = [carInput, carInput2, carInput3, carInput4, carInput4, carInput5];