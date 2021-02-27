import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contactList = [
        {
            Id:1,
            Name:'Mohammad Rafi',
            title : 'Salesforce developer'
        },
        {
            Id:2,
            Name:'Udit',
            title : 'Salesforce developer'
        },
        {
            Id:3,
            Name:'Akash Panday',
            title : 'Salesforce developer'
        },
        {
            Id:4,
            Name:'Sajid Ali',
            title : 'Salesfore consultant'
        }
    ];
    contactList1 = [
        {
            Id:1,
            Name:'Mohammad Rafi',
            title : 'Salesforce developer'
        },
        {
            Id:2,
            Name:'Udit',
            title : 'Salesforce developer'
        },
        {
            Id:3,
            Name:'Akash Panday',
            title : 'Salesforce developer'
        },
        {
            Id:4,
            Name:'Sajid Ali',
            title : 'Salesfore consultant'
        }
    ]
}