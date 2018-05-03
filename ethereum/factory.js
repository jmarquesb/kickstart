import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract (
    JSON.parse(CampaignFactory.interface),
    '0xE0FEe4108b3297Eeade82C5890565901e3034854'
);

export default instance;