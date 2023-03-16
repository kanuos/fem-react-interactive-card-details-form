import { z } from "zod";

const required_error = "Can't be blank";

export const MAX_NAME_LENGTH = 24;

const monthValidator = z
    .string({ required_error })
    .trim()
    .nonempty({ message: required_error })
    .regex(/^(01|02|03|04|05|06|07|08|09|10|11|12)$/, {
        message: "Must be between 01 and 12",
    });

const yearValidator = z
    .string({ required_error })
    .trim()
    .nonempty({ message: required_error })
    .regex(/^\d{2}$/, { message: "Must be a between 00 and 99" });

const cvvValidator = z
    .string({ required_error })
    .trim()
    .nonempty({ message: required_error })
    .regex(/^\d{3}$/, { message: "CVC must be a 3 digit number" });

const nameValidator = z
    .string({ required_error })
    .trim()
    .nonempty({ message: required_error })
    .regex(/^[a-z]+([\s]*[a-z]+)*$/i, {
        message: "Wrong format, letters only",
    })
    .max(MAX_NAME_LENGTH, { message: `Must be less than ${MAX_NAME_LENGTH} characters` });

const cardNumberValidator = z
    .string({ required_error })
    .trim()
    .nonempty({ message: required_error })
    .regex(/^[0-9]{4}[\s]{1}[0-9]{4}[\s]{1}[0-9]{4}[\s]{1}[0-9]{4}$/, {
        message: "Wrong format, numbers only",
    })


export const validator = z.object({
    name: nameValidator,
    card: cardNumberValidator,
    month: monthValidator,
    year: yearValidator,
    cvc: cvvValidator,
})

export type ValidatorType = z.infer<typeof validator>