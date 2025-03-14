import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from "@nestjs/platform-fastify";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  );
  await app.listen({ port: 8080 });
}

bootstrap().catch((err: unknown) => {
  console.error("Error during bootstrap:", err);
});

const aa = 1;
