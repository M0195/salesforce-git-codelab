import { LightningElement } from 'lwc';
export default class DataBindingInTemplate extends LightningElement {
     greeting = 'World';
     changeHandler(event){
         this.greeting = event.target.value;
     }
}