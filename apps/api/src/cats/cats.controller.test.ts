import { Test, TestingModule } from "@nestjs/testing";
import { CatsController } from "./cats.controller.js";
import { beforeEach, describe, expect, it } from "vitest";
import { CatsService } from "./cats.service.js";

describe(CatsController, () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
