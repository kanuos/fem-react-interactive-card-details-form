import type { InputMetadata } from "../components/Input/_";


export const FORM_FIELDS: InputMetadata[] = [
    {
        placeholder: "e.g. Jane Appleseed",
        label: "cardholder name",
        cls: "col-start-1 col-end-5",
        name: "name"
    },
    {
        placeholder: "e.g. 1234 5678 9123 0000",
        label: "card number",
        cls: "col-start-1 col-end-5",
        name: "card"
    },
    {
        placeholder: "MM",
        cls: "col-start-1 col-end-2",
        label: "exp.date",
        name: "month"
    },
    {
        placeholder: "YY",
        cls: "col-start-2 col-end-3",
        label: "(mm/yy)",
        name: "year"
    },
    {
        placeholder: "e.g. 123",
        label: "cvc",
        cls: "col-start-3 col-end-5",
        name: "cvc"
    }
]

