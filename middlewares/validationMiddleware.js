const { body, param, check, validationResult } = require("express-validator");

const validateFields = (...fields) => {
    return async (req, res, next) => {

        const validationRules = fields.map((field) => body(field).notEmpty().withMessage(`Please provide ${field}`));

        try {
            await Promise.all(validationRules.map((rule) => rule.run(req)));

            const errors = validationResult(req);

            if (errors.isEmpty()) {
                next();
            } else {
                return res.status(422).json({
                    message: "Please provide valid values",
                    data: {
                        error: errors.array(),
                    },
                    status: 422
                })
            }

        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error Try After Some Time",
                data: {},
                status: 500
            })
        }
    };
};


module.exports = {
    validateFields,
};
