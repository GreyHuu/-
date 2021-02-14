/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1613141668271_4466';

    // add your middleware config here
    config.middleware = [];

    //配置MySQL
    config.mysql = {
        client: {
            host: "106.15.237.74",
            port: 3306,
            user: "root",
            password: "39971004",
            database: "learn_egg"
        }
    }

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
