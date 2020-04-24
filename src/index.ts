import { InputCar } from "./models/inputVehicle";
import { Car } from "./vehicles/car";

const carInput: InputCar = {
    licence_plate: "car1",
    brand: "Fiat",
    model: "500",
    type: "car",
    volante: "Pelle"
};

console.log(JSON.stringify(new Car(carInput), null, 4));