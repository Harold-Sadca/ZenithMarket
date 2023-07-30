import express, {Express} from 'express';
import dotenv from 'dotenv';
import userRouter from './routers/userRoutes';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import cors from 'cors';
import pkg from 'body-parser';
const { json } = pkg;
import { typeDefs, resolvers } from './graphSchema'

(async () => {
  dotenv.config();
const port = process.env.PORT;
const app:Express = express();

app.use(userRouter)

interface MyContext {
  token?: String;
}

const httpServer = http.createServer(app);
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
})()