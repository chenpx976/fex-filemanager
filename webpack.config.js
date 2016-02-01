module.exports = {
    entry: './resources/assets/js/main.js',
    output: {
        path: './public/assets/js',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader?harmony'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, // 用 ! 来连接多个人 loader
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            } // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
        ]
    }
}