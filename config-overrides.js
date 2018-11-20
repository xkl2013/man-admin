const selfWebpackBaseConfigDev=require('./config/webpack.conf.dev');
const selfWebpackBaseConfigPro=require('./config/webpack.conf.dev');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const merge = require('webpack-merge');
const theme=require('./theme');


module.exports = function override(config, env) {
    let newConfig=config;
    if (env === "production") {
        newConfig=merge(config,selfWebpackBaseConfigPro)
    }else if(env === "development"){
        newConfig= merge(config,selfWebpackBaseConfigDev);
    }
    newConfig = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
             newConfig,
           );
           newConfig = rewireLess.withLoaderOptions({
                modifyVars: theme,     //  配置主体颜色
                javascriptEnabled: true,
              })(newConfig, env);
   return newConfig;
}