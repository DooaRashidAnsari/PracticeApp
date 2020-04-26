import React, { Component } from 'react';
import strings from '../resources/Strings'
import Constants from '../constants/ValidationCN'
import ErrorMessages from '../constants/ErrorCN'

export default class Validations {
    mapFunctions = new Map(
        [Constants.EMPTY,this.validateEmpty]
    )

    mapMessages = new Map(
        [Constants.EMPTY,ErrorMessages.getEmptyMessage]
    )

    validateEmpty = (value) =>{
       if(value=='')
         false
    }
    
    
    validate(names,value,fieldName){
        for(var validate of names){
           exec = this.mapFunctions.get(validate)
           result = exec(value)
           if(!result)
             return this.mapMessages.get(validate)(fieldName)
                 
        }
        return null
    }
}