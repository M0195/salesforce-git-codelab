import { LightningElement ,track,api,wire} from 'lwc';
import {getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi'
export default class Reusepicklistcmpinlwc extends LightningElement {
    @api objAPIName;
    @api fieldAPIName;
    @track options = [];
    @track picklistlabel;
    objfieldAPIName ;
    recordTypeId;
    @track error;
    @track selectedValue;
    @wire(getObjectInfo,{objectApiName :'$objAPIName'})
        getObjectInfo(result){
            if(result.data){
                console.log('Data==',result.data);
                let fieldData = result.data.fields[this.fieldAPIName];
                if(fieldData){
                    console.log('fieldData',fieldData);
                    this.picklistlabel = fieldData.label;
                    this.objfieldAPIName  = {};
                    this.objfieldAPIName.fieldApiName = fieldData.apiName;
                    this.objfieldAPIName .objectApiName = result.data.apiName;
                    this.recordTypeId = result.data.defaultRecordTypeId;
                    console.log('record Id ::'+this.recordTypeId);
                }else{
                    this.error = 'Please enter valid field api name';
                }
            }else if(result.error){
                this.error = JSON.stringify(result.error);
            }
    }

    @wire(getPicklistValues, { recordTypeId: '$recordTypeId', fieldApiName: '$objfieldAPIName'})
    picklistValues({error, data}) {
        if (data) {
            console.log(data);
            let piclistOptionValue = [{label:'--None--',value:'--None--'}];
            if(data.values){
                data.values.forEach(key => {
                    piclistOptionValue.push({
                        label: key.label, 
                        value: key.value
                    })
                });

                this.options = piclistOptionValue;
            }
        }else{
            this.error = JSON.stringify(error);
        }
    }  
    
    changeHandler(event){
        this.selectedValue  = event.target.value;
        console.log('selectedValue'+this.selectedValue);
    }
}