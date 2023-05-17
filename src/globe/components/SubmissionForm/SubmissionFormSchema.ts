import Joi from "joi";

export const submissionFormFieldsSchema = Joi.object({
  clubName: Joi.string().required().messages({
    "string.empty": "Please enter a club name",
  }),
  countryName: Joi.string().required().messages({
    "string.empty": "Please enter a country",
  }),
  cityName: Joi.string().required().messages({
    "string.empty": "Please enter a city",
  }),
  sportType: Joi.required().messages({
    "string.empty": "Please enter at least 1 sport type",
  }),
  facebook: Joi.string().allow(""),
  instagram: Joi.string().allow(""),
  whatsApp: Joi.string().allow(""),
  description: Joi.string().allow(""),
});
