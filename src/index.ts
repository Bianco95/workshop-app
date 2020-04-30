import { InputCar } from './models/inputVehicle';
import { Workshop } from "./workshop/workshop";
import { AppManager } from './manager/appManager';
import { clients, businessOwners, inputVehicles } from './mock/mock';
import App from "./App";
// retrieve the instance of the appManager
/*const appManagerInstance = AppManager.getInstance();

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


// set the fourth parameter to false to get the detail of the vehicle; if true return the number of vehicles
console.log(JSON.stringify(appManagerInstance.getUsersVehicleWorkshop(clients[1].name, clients[1].lastname, clients[1].email, false, businessOwners[1].username),null,4));

workshop1.getVehicles()[0].setState("pending_spare");


//console.log(appManagerInstance.getVehiclePendingSpareOfOwner(businessOwners[1].username));

//console.log(JSON.stringify(appManagerInstance.getVehicleByLicense("CC"),null,4));
*/

//metto in ascolto ilserver web sulla porta 3000
// che viene eseguita dopo che il server web si è messo in ascolto
// e quello che fa è il console log
App.listen(3000, function () {
    console.log("Listening on port 3000");
});


