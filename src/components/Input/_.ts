import { ValidatorType } from "../../utils/validator";

export type InputMetadata = {
    label?: string;
    placeholder: string;
    cls?: string;
    name: keyof ValidatorType
}

export interface InputType extends InputMetadata {
    error?: string;
    value: string;
    changeCallback: (payload: ChangePayloadType) => void;
}


export type ChangePayloadType = { key: string; value: string }