import Fastify from "fastify";
import { config } from "dotenv";

import { create } from "routes/create";
import { update } from "routes/update";
import { list } from "routes/list";
import { del } from "routes/delete";
import { connect } from "./database";

import "reflect-metadata";

config();

const server = async () => {
	const fastify = Fastify({
		logger: true,
	});

	await connect();

	fastify.post("/", create);
	fastify.put("/", update);
	fastify.get("/", list);
	fastify.delete("/", del);

	fastify.listen(3000, err => {
		if (err) throw err;
	});
};

server();
