import { ValidatorType } from "../../utils/validator";
import { ChangePayloadType } from "../Input/_";


export type FormProps = {
    formData: ValidatorType,
    formError: ValidatorType,
    updateForm: (_: ChangePayloadType) => void;
    submitForm: () => void
}