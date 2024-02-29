import { cert } from "../model/model.js";

const dataCert = async (req, res) => {
    try{
        const findDataCert = await cert.findAll();
        res.status(200).json(findDataCert);
    }catch(error){
        console.log(error.message);
        res.status(500).json({error : "internal server error"});
    }
}

export default dataCert;