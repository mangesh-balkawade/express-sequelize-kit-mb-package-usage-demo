exports.assignOrgInfo = async (req, res, next) => {
    try {
        // use the data from jwt token
        let organizationId = 1;
        req.body.organizationId = organizationId;
        console.log(req.body, "body");
        next()
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error Try After Some Time",
            data: {},
            status: 500
        })
    }
}
