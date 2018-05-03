const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'dizzy adapt jealous ten family flash glance drastic gossip swing error best',
    'https://rinkeby.infura.io/44uCGTSwP0ja1FzRvCeR');

const web3 = new Web3(provider);

//Necesario para poder usar el async + await!!!!
const deploy = async () => {
    const accounts =  await web3.eth.getAccounts();
    console.log('Attempting to deploy from account: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to: ' , result.options.address);
};
deploy();