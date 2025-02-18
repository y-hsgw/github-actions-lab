import { Module } from "@nestjs/common";
import { CatsModule } from "./cats/cat.module.js";

@Module({
  imports: [CatsModule],
})
export class AppModule {}
