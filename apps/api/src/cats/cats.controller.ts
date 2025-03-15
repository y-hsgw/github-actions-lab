import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto.js";
import { CatsService } from "./cats.service.js";
import { type Cat } from "./interfaces/cat.interface.js";
import { randomUUID } from "node:crypto";

@Controller("cats")
export class CatsController {
  private catsService: CatsService;

  constructor(catsService: CatsService) {
    this.catsService = catsService;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    const newCat: Cat = {
      age: createCatDto.age,
      breed: createCatDto.breed,
      name: createCatDto.name,
      id: randomUUID(),
    };
    this.catsService.create(newCat);
  }

  @Get()
  findAll(@Query() query: { id: string }): Cat[] {
    try {
      if (query.id === "10") {
        throw new Error("IDが10はありえません。");
      }
      return this.catsService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: "This is a custom message",
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        }
      );
    }
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): string {
    return `This action returns a #${id.toString()} cat`;
  }
}
