const up = (knex) =>
    knex.schema.createTable("movieTags", (table) => {
        table.increments("id"), table.text("name").notNullable();
        table
            .integer("note_id")
            .references("id")
            .inTable("movieNotes")
            .onDelete("CASCADE");
        table.integer("user_id").references("id").inTable("users");
    });

const down = (knex) => knex.schema.dropTable("movieTags");

export { up, down };
