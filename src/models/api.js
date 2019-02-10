/**
 * Created by 1002125 on 15. 7. 9..
 */


'use strict';

const MysqlRepository    = require('../helpers/MysqlRepository');
const Co        = require('co');
const _         = require('lodash');


class APITable extends MysqlRepository {

    constructor(tableName) {

        super(tableName);
    }
}

module.exports = new APITable('APITable');


