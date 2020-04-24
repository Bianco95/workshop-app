import { Vehicles } from "./vehicles";

export class Car extends Vehicles{

    private horsePower:number;
    private engine: string;

    constructor(protected brand:string, protected license:string){
        super(brand,license)
    }
    public setEngine(value:string):void{
        this.engine = value;
    }
    public getEngine():string{
        return this.engine;
    }
    public setHorsePower(value:number){
        this.horsePower = value;
    }
    public getHorsePower():number{
        return this.horsePower;
    }

}