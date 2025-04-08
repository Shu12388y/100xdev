"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const server = new server_1.ApolloServer({
    typeDefs: `type Query {hello:String}`,
    resolvers: {
        Query: {
            hello: () => "Hello World",
        },
    },
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: {
        port: 4000,
    },
});
