import knex from "../database/knex/index.js";
import AppError from "../utils/AppError.js";
import "express-async-errors";
import pkg from "bcryptjs";
const { hash, compare } = pkg;

class UserControllers {
    async create(request, response) {
        let { name, email, password } = request.body;

        const checkingUsersExist = await knex("users").where({ email }).first();

        if (checkingUsersExist) {
            throw new AppError(
                "E-mail já está em uso! Tente outro endereço de email."
            );
        }

        const hashedPassword = await hash(password, 8);
        password = hashedPassword;

        await knex("users").insert({ name, email, password });

        response.status(201).json("Usuário Cadastrado com Sucesso!");
    }

    async update(request, response) {
        const { name, email, password, oldPassword } = request.body;
        const { id } = request.params;

        const user = await knex("users").where({ id }).first();

        if (!user) {
            throw new AppError("Usuário não encontrado, tente novamente!");
        }

        const userWithUpdatedEmail = await knex("users")
            .where({ email })
            .first();

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso por outro usuário!");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if (password && !oldPassword) {
            throw new AppError(
                "Você precisa informar a senha antiga para definir sua nova senha!"
            );
        }

        if (password && oldPassword) {
            const checkingOldPassword = await compare(
                oldPassword,
                user.password
            );

            if (!checkingOldPassword) {
                throw new AppError("A senha antiga não confere!");
            }
            user.password = await hash(password, 8);
        }

        await knex("users").where({ id }).update({
            name: user.name,
            email: user.email,
            password: user.password,
            updated_at: knex.fn.now(),
        });

        response.json("Usuário Atualizado com Sucesso!");
    }
}

export default UserControllers;
