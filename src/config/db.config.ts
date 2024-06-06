import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "strong_password",
    database: "alex",
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    logging: true,
    synchronize: true,
})