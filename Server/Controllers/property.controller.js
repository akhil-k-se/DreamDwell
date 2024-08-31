const Property = require("../models/property.models.js").Property;

const getAllProperties = async(_, res) => {
    try {
        const properties = await Property.find();
        console.log(properties);
        if(!properties){
            return res.status(400).json(
                {
                    success: false,
                    message: "No properties found"
                }
            )
        }
        return res.status(200).json(
            {
                success: true,
                properties: properties
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Internal server error"
            }
        )
    }
}

module.exports=getAllProperties;