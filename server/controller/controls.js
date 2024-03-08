import { cert } from "../model/model.js";


export const dataCert = async (req, res) => {
    const certId = parseInt(req.params.id)
    try {
      const certIds = await cert.findByPk(certId);
    
      if (certIds !== null && certIds !== undefined) {
        res.json(certIds);
      } else {
        res.status(404).send('user tidak ditemukan');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Terjadi kesalahan server');
    }
  };

export default dataCert;