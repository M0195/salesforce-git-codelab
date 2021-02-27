
import { LightningElement } from 'lwc';

export default class DataBindingInTemplateWithGetterMethod extends LightningElement {
    firstName = '';
    lastName = '';
    changeHandler(event){
        if(event.target.name ==='firstName'){
            this.firstName = event.target.value;
        }
       if(event.target.name ==='lastName'){
           this.lastName = event.target.value;
       }
    }

    get uppperCasedFullName(){
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}