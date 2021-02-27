import { LightningElement, api} from 'lwc';

export default class Helloword extends LightningElement {
    @api firstName = "World";
}