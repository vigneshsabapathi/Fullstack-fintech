import * as Joi from "joi";
import { ITransactionRegister } from "../../../database/models/Transactions";
import generateValidatorFunction from "./helpers/generateValidatorFunction";
import IValidatorFunction from "./types/IValidatorFunction";

const REQUIRED_MSG = "All fields must be filled.";
const VALUE_MSG = "The transaction value must be a positive numerical value";

class TransactionValidator {
  static register = generateValidatorFunction(
    Joi.object({
      username: Joi.string().required().messages({
        "any.required": REQUIRED_MSG,
        "string.empty": REQUIRED_MSG,
        "string.base": REQUIRED_MSG,
      }),
      value: Joi.number().positive().required().messages({
        "any.required": REQUIRED_MSG,
        "number.base": VALUE_MSG,
        "number.positive": VALUE_MSG,
      }),
    }).messages({
      "object.unknown":
        "The request body contains fields that are not allowed.",
    })
  ) as IValidatorFunction<ITransactionRegister>;
}

export default TransactionValidator;
