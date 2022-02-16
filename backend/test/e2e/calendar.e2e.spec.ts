import mongoose from "mongoose";
import * as request from "supertest";
import { mongooseConnect } from "../../src/db/connent";
import CalendarModel from "../../src/db/model";
import { Calendar } from "../../src/interface/entity";

describe("Calendar Route Test", () => {
  beforeAll(async () => {
    await mongooseConnect();
  });

  beforeEach(async () => {
    const calendar: Calendar = {
      name: "test1",
      users: [],
    };
    await CalendarModel.create(calendar);
  });

  afterEach(async () => {
    await CalendarModel.deleteMany({});
  });

  afterAll(() => {
    mongoose.disconnect();
  });
  
  it("should test that true === true", async () => {
    const calendar = await CalendarModel.findOne({name: "test1"}) as Calendar;
    
    expect(calendar.name).toBe("test1");
  });
});
