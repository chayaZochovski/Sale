import { Present } from "./present.model";

export class Customer{

    public name: string = "";
    public presents : Present[] = [];

    constructor(n:string){
        this.name=n;
    }

}