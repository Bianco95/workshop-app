import { ChangeWheel } from './vehicles/operationStrategies/changewheel';
import { InputCar } from "./models/inputVehicle";
import { Car } from "./vehicles/car";
import { Workshop } from "./workshop/workshop";

const carInput: InputCar = {
    licence_plate: "car1",
    brand: "Fiat",
    model: "500",
    type: "car",
    volante: "Pelle"
};

//console.log(JSON.stringify(new Car(carInput), null, 4));
const officina = new Workshop();
officina.getWorkshopManager().addVehicle(officina.getVehicles(), carInput);
officina.getVehicles()[0].setApplicablesStrategies([new ChangeWheel()]);
officina.getVehicles()[0].applyStrategy("ChangeWheel");
console.log(JSON.stringify(officina, null,4));