import React, { Component } from 'react';
import strings from '../resources/Strings'
import Constants from '../constants/ValidationCN'
import ErrorMessages from '../constants/ErrorCN'
const errorMsgs = new ErrorMessages()

export default class Validations {
    mapFunctions = new Map(

    )
    mapMessages = new Map(

    )
    constructor() {
        this.mapFunctions.set(Constants.EMPTY, this.validateEmpty.bind(this))
        this.mapMessages.set(Constants.EMPTY, errorMsgs.getEmptyMessage.bind(this))
    }


    validateEmpty (value)  {
        if (value == '')
            return false

        else return true
    }


    validate(names, value, fieldName) {
        for (var validate of names) {
            exec = this.mapFunctions.get(validate)
            result = exec(value)
            console.log('result')
            console.log(result)
            if (!result)
                return this.mapMessages.get(validate)(fieldName)

        }
        return null
    }
}