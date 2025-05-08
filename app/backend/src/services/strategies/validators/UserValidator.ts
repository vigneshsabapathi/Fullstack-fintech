import * as Joi from "joi";
import { IUserLogin, IUserRegister } from "../../../database/models/User";
import generateValidatorFunction from "./helpers/generateValidatorFunction";
import IValidatorFunction from "./types/IValidatorFunction";

const REQUIRED_MSG = "All fields must be filled.";
const USERNAME_LENGTH_MSG = "Username must be at least 3 characters long.";
const PASSWORD_PATTERN_MSG =
  "Password must have at least 8 characters, one number, and one uppercase letter.";

class UserValidator {
  static login = generateValidatorFunction(
    Joi.object({
      username: Joi.string().required().messages({
        "string.empty": REQUIRED_MSG,
        "string.base": REQUIRED_MSG,
        "any.required": REQUIRED_MSG,
      }),
      password: Joi.string().required().messages({
        "string.empty": REQUIRED_MSG,
        "string.base": REQUIRED_MSG,
        "any.required": REQUIRED_MSG,
      }),
    }).messages({
      "object.unknown":
        "The request body contains fields that are not allowed.",
    })
  ) as IValidatorFunction<IUserLogin>;

  static register = generateValidatorFunction(
    Joi.object({
      username: Joi.string().min(3).required().messages({
        "any.required": REQUIRED_MSG,
        "string.empty": REQUIRED_MSG,
        "string.base": REQUIRED_MSG,
        "string.min": USERNAME_LENGTH_MSG,
      }),
      password: Joi.string()
        .regex(/^(?=.*\d)(?=.*[A-Z]).{8,}$/)
        .required()
        .messages({
          "any.required": REQUIRED_MSG,
          "string.empty": REQUIRED_MSG,
          "string.base": REQUIRED_MSG,
          "string.pattern.base": PASSWORD_PATTERN_MSG,
        }),
    }).messages({
      "object.unknown":
        "The request body contains fields that are not allowed.",
    })
  ) as IValidatorFunction<IUserRegister>;
}

export default UserValidator;
