import { InputVehicle } from './inputVehicle';
import { Vehicle } from './../vehicles/vehicle';
/**
 * I veicoli appartengono ai clienti, un cliente può avere più veicoli; 
 * il cliente è descritto da un nome, un cognome, un numero di telefono e una email.
 */

 export interface Client{
     name: string;
     lastname: string;
     phoneNumber: string;
     email: string;
     vehicles: InputVehicle[];
 }