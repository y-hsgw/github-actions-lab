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
import { Cat } from "./interfaces/cat.interface.js";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
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
