import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface.js";
import { randomUUID } from "node:crypto";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      id: randomUUID(),
      name: "Kitty",
      age: 1,
      breed: "British Shorthair",
    },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
