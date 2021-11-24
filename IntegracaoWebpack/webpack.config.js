const path = require ('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production', //development também pode ser aplicado,
    entry : './src/main.ts',
    output: {
        filename: 'app.main.js',
        path: path.join(__dirname, 'dist')
    },
    plugins:[
        new CopyPlugin([{
            from: 'public'
        }
    ])],
    resolve: {
        externsions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude : /node_modules/
        }]
    }
}