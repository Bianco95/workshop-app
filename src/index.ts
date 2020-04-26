import { BusinessOwner } from './models/ businessOwner';
import { ChangeWheel } from './vehicles/operationStrategies/changewheel';
import { InputCar, InputVehicle } from "./models/inputVehicle";
import { Car } from "./vehicles/car";
import { Workshop } from "./workshop/workshop";
import { Client } from './models/client';
import { AppManager } from './appManager';

// retrieve the instance of the appManager
const appManagerInstance = AppManager.getInstance();

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
    licence_plate: "CC",
    brand: "Fiat",
    model: "Alfa Romeo Giulietta",
    type: "car",
    steeringWheel: "Spacca"
};

const carInput4: InputCar = {
    licence_plate: "CC",
    brand: "Fiat",
    model: "Lamborghini",
    type: "car",
    steeringWheel: "Spacca"
};

const carInput5: InputCar = {
    licence_plate: "CC",
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

appManagerInstance.addClients(client);
appManagerInstance.addClients(clientArmaDeiCarabinieri);

//console.log(JSON.stringify(appManagerInstance.getUsersVehicle(client.name, client.lastname, client.email)),null,4);

const workshop = new Workshop("frankie garage");
workshop.setBusinessOwner(businessOwner);
workshop.getWorkshopManager().addVehicle(workshop.getVehicles(), carInput);
workshop.getWorkshopManager().addVehicle(workshop.getVehicles(), carInput2);
workshop.getWorkshopManager().addVehicle(workshop.getVehicles(), carInput3);

const workshop1 = new Workshop("officina2");
workshop1.setBusinessOwner(businessOwner2);
workshop1.getWorkshopManager().addVehicle(workshop1.getVehicles(), carInput4);
workshop1.getWorkshopManager().addVehicle(workshop1.getVehicles(), carInput5);

//console.log(JSON.stringify(appManagerInstance.getUsersVehicleWorkshop(clientArmaDeiCarabinieri.name, 
//    clientArmaDeiCarabinieri.lastname, clientArmaDeiCarabinieri.email, false, businessOwner2.username),null,4));

workshop1.getVehicles()[0].setState("pending_spare");

//console.log(appManagerInstance.getVehiclePendingSpareOfOwner(businessOwner2.username));

console.log(JSON.stringify(appManagerInstance.getVehicleByLicense("CC"),null,4));

