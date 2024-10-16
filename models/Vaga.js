import { DataTypes } from 'sequelize';
import sequelize from '../database.js'; // Certifique-se de que o Sequelize está configurado corretamente no database.js

const Vaga = sequelize.define('Vaga', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salario: {
        type: DataTypes.DECIMAL, // Valor opcional
        allowNull: true
    }
}, {
    tableName: 'vagas',
    timestamps: false
});

export default Vaga;
