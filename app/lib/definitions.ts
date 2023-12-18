
export type LinkType = {
    url: string,
    text: string
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

export interface ExtendedDocument extends Document {
    startViewTransition?: any;
  }