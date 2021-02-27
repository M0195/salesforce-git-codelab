import { LightningElement } from 'lwc';

export default class RenderDOMElementsConditionally extends LightningElement {
    areDetailsVisible = false;
    changeHandler(event){
        this.areDetailsVisible = event.target.checked;
    }
}