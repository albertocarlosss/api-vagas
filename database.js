import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgresql://carlos:da29CZcd3Tfl6YNgdbijDQ@golfzada-1690.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full', {
    dialect: 'postgres',
    logging: false, // Evitar logs excessivos
});

try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso.');
} catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
}

export default sequelize;
