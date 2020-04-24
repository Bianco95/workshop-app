import { Client } from './clients';
import { Vehicles } from './vehicles';
import { userInfo } from 'os';


export class AppManager {
    private static instance: AppManager;
    private users: Client[];

    constructor() {
        this.users = [];
    }

    public static getInstance(): AppManager {
        if (!AppManager.instance) {
            AppManager.instance = new AppManager();
        }

        return AppManager.instance;
    }

    public getUserVehicles(user: Client): Vehicles[] {
       
       return [];
    }


}