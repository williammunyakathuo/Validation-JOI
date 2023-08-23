const Joi = require("joi")

const validator = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false })

const signupSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(10).required(),
    confirmPassword : Joi.ref("password"),
    address :{
        state : Joi.string().length(2).required(),
    },
    DOB : Joi.date().greater(new Date("2012-01-02")).required()
});


exports.validateSignup = validator(signupSchema);