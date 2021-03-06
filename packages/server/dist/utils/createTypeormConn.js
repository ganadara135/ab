"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const Listing_1 = require("../entity/Listing");
exports.createTypeormConn = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("check DB NODE_ENV : ", process.env.NODE_ENV);
    console.log("check DATABASE_URL : ", process.env.DATABASE_URL);
    console.log("MYSQL_USER", process.env.MYSQL_USER);
    console.log("MYSQL_PASSWORD", process.env.MYSQL_PASSWORD);
    console.log("MYSQL_DATABASE", process.env.MYSQL_DATABASE);
    return process.env.NODE_ENV === "production"
        ? typeorm_1.createConnection({
            type: 'mariadb',
            host: 'rdb',
            username: 'mysql',
            password: 'mysql',
            database: 'database',
            synchronize: true,
            logging: true,
            entities: [Listing_1.Listing, User_1.User],
            name: "default"
        })
        : typeorm_1.createConnection({
            type: 'mariadb',
            host: 'rdb',
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            synchronize: true,
            logging: true,
            entities: [Listing_1.Listing, User_1.User],
            name: "default"
        });
});
//# sourceMappingURL=createTypeormConn.js.map