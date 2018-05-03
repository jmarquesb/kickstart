import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract (
    JSON.parse(CampaignFactory.interface),
    '0x5b550e5f0C567a2712a3650938061eb81EB90037'
);

export default instance;