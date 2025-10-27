// Lógica (filtros), tratativa de erros, regras de negócios.

import * as bruxoModel from "./../models/bruxoModel.js";

export const listarTodos = async (req, res) => {
    try {
        const bruxos = await bruxoModel.encontreTodos();

        if (!bruxos || bruxos.length === 0) {
            res.status(404).json({
                total: 0,
                message: "Não há bruxos na lista",
                bruxos,
            });
        }

        res.status(200).json({
            total: bruxos.length,
            message: "Lista de bruxos",
            bruxos,
        });
    } catch (error) {
        res.status(500).json({
            error: "Eroo interno de servidor",
            details: error.message,
            status: 500,
        });
    }
};

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const bruxo = await bruxoModel.encontreUm(id);

        if (!bruxo) {
            return res.status(404).json({
                error: "Bruxo não encontrado",
                message: "Verifique o id do bruxo",
                id: id,
            });
        }

        res.status(200).json({
            message: "Bruxo encontrado",
            bruxo,
        });
    } catch (error) {
        res.status(500).json({
            error: "Eroo interno de servidor",
            details: error.message,
            status: 500,
        });
    }
};

export const criar = async (req, res) => {
    try {
        const { nome, casa, patrono, varinha, anoMatricula } = req.body;

        const dado = req.body;

        const camposObrigatorios = ["nome", "casa", "varinha", "anoMatricula"];

        const faltando = camposObrigatorios.filter((campo) => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(", ")}.`,
            });
        }

        const casasValidas = ["Grifinória", "Sonserina", "Corvinal", "Lufa-Lufa"];
        if (!casasValidas.includes(casa)) {
            return res.status(400).json({
                erro: "Invalid house! The Sorting Hat only recognizes the 4 houses",
                casasValidas,
            });
        }

        const novoBruxo = await bruxoModel.criar(req.body);
        res.status(201).json({
            message: "Wizard creted sucessfull!",
            bruxo: novoBruxo,
        });
    } catch (error) {
        res.status(500).json({
            error: "Error to creat wizard",
            details: error.message,
        });
    }
};

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const bruxoExiste = await bruxoModel.encontreUm(id);

        if (!bruxoExiste) {
            return res.status(404).json({
                error: "Wizard not find wich this id",
                id: id,
            });
        }

        await bruxoModel.deletar(id);

        res.status(200).json({
            message: "Wizard deleted sucessfull",
        });
    } catch (error) {
        res.status(500).json({
            error: "error deleting wizard",
            details: error.message,
        });
    }
};

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const bruxoExiste = await bruxoModel.encontreUm(id);

        if (!bruxoExiste) {
            return res.status(404).json({
                error: "Wizard do not exist",
                id: id,
            });
        }

        if (dados.casa) {
        const casasValidas = ["Grifinória", "Sonserina", "Corvinal", "Lufa-Lufa"];
        if (!casasValidas.includes(dados.casa)) {
            return res.status(400).json({
                erro: "Invalid house! The Sorting Hat only recognizes the 4 houses",
                casasValidas,
            });
        }
    }

        const bruxoAtualizado = await bruxoModel.atualizar(id, dados);
        res.status(200).json({
            message: "Wizard updated sucessfull",
            bruxo: bruxoAtualizado,
        });
    } catch (error) {
        res.status(500).json({
            error: "Error to update wizard",
            details: error.message,
        });
    }
};
