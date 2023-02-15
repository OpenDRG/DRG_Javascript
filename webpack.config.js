const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        index:'./index.js',
        chs_drg_11:'./drg_group/chs_drg_11/GroupProxy.js',
        suzhou_2022:'./drg_group/suzhou_2022/GroupProxy.js',
        taizhou_2022:'./drg_group/taizhou_2022/GroupProxy.js',
        wuxi_2022:'./drg_group/wuxi_2022/GroupProxy.js',
        wuhan_2022:'./drg_group/wuhan_2022/GroupProxy.js',
        beijing_2022:'./drg_group/beijing_2022/GroupProxy.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'DRG分组器',
        }),
    ],
};