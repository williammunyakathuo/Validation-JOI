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
    DOB : Joi.date().greater(new Date("2012-01-02")).required(),
    refered : Joi.boolean().required(),
    referalDetails : Joi.string().when("refered",{
        is : true,
        then :Joi.string().required().min(3).max(50),
        otherwise: Joi.string().optional()
    })
});


exports.validateSignup = validator(signupSchema);