import { ComponentClass, FunctionComponent } from "react";

export type LinkType = {
    url: string,
    text: string
}

export type LinksDashboard = {
    name : string, 
    link: string , 
    icon? : undefined | string | FunctionComponent<{ size: string; }> | ComponentClass<{ size: string; }, any>
}

export type DataInput = {
    label: string,
    name: string,
    type: string,
    placeholder: string,
}

export type DataModel = {
    tittle :string,
    name: string,
    lastname: string,
    email: string,
    dni: string,
    address : string,
    phone : string,
    submit : string
}

export type UserModel = {
    name: string,
    lastname: string,
    email: string,
    dni: string,
    address : string,
    phone : string
}


export interface ExtendedDocument extends Document {
    startViewTransition?: any;
  }