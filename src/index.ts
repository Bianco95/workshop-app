import { Workshop } from "./workshop/workshop";
import { AppManager } from './manager/appManager';
import { clients, businessOwners, inputVehicles } from './mock/mock';

// retrieve the instance of the appManager
const appManagerInstance = AppManager.getInstance();

clients.forEach(clientElm =>{
    appManagerInstance.addClients(clientElm);
})

//console.log(JSON.stringify(appManagerInstance.getUsersVehicle(client.name, client.lastname, client.email)),null,4);

const workshop = new Workshop("frankie garage");
workshop.setBusinessOwner(businessOwners[0]);
workshop.getWorkshopManager().addVehicle(workshop.getVehicles(), inputVehicles[0]);
workshop.getWorkshopManager().addVehicle(workshop.getVehicles(), inputVehicles[1]);
workshop.getWorkshopManager().addVehicle(workshop.getVehicles(), inputVehicles[2]);

const workshop1 = new Workshop("officina2");
workshop1.setBusinessOwner(businessOwners[1]);
workshop1.getWorkshopManager().addVehicle(workshop1.getVehicles(), inputVehicles[3]);
workshop1.getWorkshopManager().addVehicle(workshop1.getVehicles(), inputVehicles[4]);

//console.log(JSON.stringify(appManagerInstance.getUsersVehicleWorkshop(clientArmaDeiCarabinieri.name, 
//    clientArmaDeiCarabinieri.lastname, clientArmaDeiCarabinieri.email, false, businessOwner2.username),null,4));

workshop1.getVehicles()[0].setState("pending_spare");

console.log(appManagerInstance.getVehiclePendingSpareOfOwner(businessOwners[1].username));

//console.log(JSON.stringify(appManagerInstance.getVehicleByLicense("CC"),null,4));

