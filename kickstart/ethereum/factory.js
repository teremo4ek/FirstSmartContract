import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa5e0A36a3fe341b3ee6bf494d83121b22BaA912e'
);

export default instance;
