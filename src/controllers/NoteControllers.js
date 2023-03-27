import knex from "../database/knex/index.js";

class NoteControllers {
	async create(request, response) {
		const { title, description, rating, tags } = request.body;
		const { user_id } = request.params;

		const [note_id] = await knex("movieNotes").insert({
			title,
			description,
			rating,
			user_id,
		});

		const tagsInsert = tags.map((tag) => {
			return {
				name: tag,
				note_id,
				user_id,
			};
		});

		await knex("movieTags").insert(tagsInsert);

		response.json("Nota Cadastrada com Sucesso!");
	}

	async show(request, response) {
		const { id } = request.params;

		const note = await knex("movieNotes").where({ id }).first();
		const tags = await knex("movieTags").where({ note_id: id });

		response.json({
			...note,
			tags,
		});
	}

	async index(request, response) {
		const { user_id, title, tags } = request.query;

		let notes;

		if (tags) {
			const filteredTags = tags.split(",").map((tag) => tag.trim());

			notes = await knex("movieTags")
				.select([
					"movieNotes.id",
					"movieNotes.title",
					"movieNotes.user_id",
				])
				.where("movieNotes.user_id", user_id)
				.whereLike("movieNotes.title", `%${title}%`)
				.whereIn("name", filteredTags)
				.innerJoin("movieNotes", "movieNotes.id", "movieTags.note_id")
				.orderBy("movieNotes.title");
		} else {
			notes = await knex("movieNotes")
				.where({ user_id })
				.whereLike("title", `%${title}%`)
				.orderBy("movieNotes.title");
		}

		const userTags = await knex("movieTags").where({ user_id });

		const notesWithTags = notes.map((note) => {
			const noteTags = userTags.filter((tag) => tag.note_id === note.id);

			return {
				note,
				tags: noteTags,
			};
		});

		response.json({ notesWithTags });
	}

	async delete(request, response) {
		const { id } = request.params;

		await knex("movieNotes").where({ id }).delete();

		response.json("Nota Deletada com Sucesso!");
	}
}

export default NoteControllers;
