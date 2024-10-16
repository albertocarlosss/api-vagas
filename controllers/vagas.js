import Vaga from '../models/Vaga.js';

export const adicionarVaga = async (req, res) => {
    const { titulo, descricao, cargo, cidade, salario } = req.body;
    
    if (!titulo || !descricao || !cargo || !cidade) {
        return res.status(400).send({ mensagem: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    try {
        const novaVaga = await Vaga.create({ titulo, descricao, cargo, cidade, salario });
        res.status(201).send({ mensagem: 'Vaga criada com sucesso!', vaga: novaVaga });
    } catch (error) {
        res.status(500).send({ mensagem: 'Erro ao criar vaga.', erro: error.message });
    }
};

export const listarVagas = async (req, res) => {
    try {
        const vagas = await Vaga.findAll();
        res.status(200).send({ vagas });
    } catch (error) {
        res.status(500).send({ mensagem: 'Erro ao listar vagas.', erro: error.message });
    }
};

export const buscarVagaPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const vaga = await Vaga.findByPk(id);
        if (!vaga) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada.' });
        }
        res.status(200).send({ vaga });
    } catch (error) {
        res.status(500).send({ mensagem: 'Erro ao buscar vaga.', erro: error.message });
    }
};

export const atualizarVaga = async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, cargo, cidade, salario } = req.body;

    try {
        const vaga = await Vaga.findByPk(id);
        if (!vaga) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada.' });
        }

        await vaga.update({ titulo, descricao, cargo, cidade, salario });
        res.status(200).send({ mensagem: 'Vaga atualizada com sucesso!' });
    } catch (error) {
        res.status(500).send({ mensagem: 'Erro ao atualizar a vaga.', erro: error.message });
    }
};

export const deletarVaga = async (req, res) => {
    const { id } = req.params;

    try {
        const vaga = await Vaga.findByPk(id);
        if (!vaga) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada.' });
        }

        await vaga.destroy();
        res.status(200).send({ mensagem: 'Vaga deletada com sucesso!' });
    } catch (error) {
        res.status(500).send({ mensagem: 'Erro ao deletar a vaga.', erro: error.message });
    }
};

export const filtrarPorCargo = async (req, res) => {
    const { cargo } = req.params;
    try {
        const vagas = await Vaga.findAll({ where: { cargo } });
        res.status(200).send({ vagas });
    } catch (error) {
        res.status(500).send({ mensagem: 'Erro ao filtrar vagas por cargo.', erro: error.message });
    }
};

export const filtrarPorCidade = async (req, res) => {
    const { cidade } = req.params;
    try {
        const vagas = await Vaga.findAll({ where: { cidade } });
        res.status(200).send({ vagas });
    } catch (error) {
        res.status(500).send({ mensagem: 'Erro ao filtrar vagas por cidade.', erro: error.message });
    }
};
