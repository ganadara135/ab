// import { getConnectionOptions, createConnection } from "typeorm";
import { createConnection } from "typeorm";
import { User } from "../entity/User";
import { Listing } from "../entity/Listing";

export const createTypeormConn = async () => {
  console.log("check DB NODE_ENV : ", process.env.NODE_ENV)
  console.log("check DATABASE_URL : ", process.env.DATABASE_URL)
  console.log("MYSQL_USER", process.env.MYSQL_USER)
  console.log("MYSQL_PASSWORD", process.env.MYSQL_PASSWORD)
  console.log("MYSQL_DATABASE", process.env.MYSQL_DATABASE)
  // ormconfig.json 에서 읽어옮
  // const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  // console.log("체크 connectionOption : ", connectionOptions)
  return process.env.NODE_ENV === "production"
   ? createConnection({
      // ...connectionOptions,
      // url: process.env.DATABASE_URL,
      // url: 
      type: 'mariadb',
      host: 'rdb',
      // username: process.env.MYSQL_USER,
      // password: process.env.MYSQL_PASSWORD,
      // database: process.env.MYSQL_DATABASE,
  
      username: 'mysql',
      password: 'mysql',
      database: 'database',

      synchronize: true,      // 중요
      logging: true,
      entities: [ Listing, User],
      name: "default"
    } as any)
    // Docker 안에서 Development 버전도 돌려야하므로 직접 적어줌, ormconfig.json  안 통함
    : createConnection({
      // ...connectionOptions}
      type: 'mariadb',
      host: 'rdb',
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      synchronize: true,      // 중요
      logging: true,
      // url: process.env.DATABASE_URL,
      entities: [Listing, User],
      name: "default"} as any);
}  