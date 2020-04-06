const path = require('path');

module.exports={
    entry:['@babel/polyfill','./main.js'],//qual é o arquivo principal
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },

    module:{
        rules:[//como o webpack deve se comportar quando o usuario importar novos arquivos js
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                }
            }

        ],
    },
};