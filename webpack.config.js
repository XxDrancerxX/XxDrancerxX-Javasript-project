const path = require('path');

module.exports = {
    entry: './src/excuse.js', // Your JavaScript entry file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Output file
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // CSS handling
            },
        ],
    },
    mode: 'development', // Use 'production' for deployment
};
