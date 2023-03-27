import knex from "../database/knex/index.js";

class TagsControllers {
    async index(request, response) {
        const { user_id } = request.params;

        const tags = await knex("movieTags").where({ user_id });

        response.json({ tags });
    }
}

export default TagsControllers;
