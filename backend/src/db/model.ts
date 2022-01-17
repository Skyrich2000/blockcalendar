import { Schema, model } from "mongoose";

import { Calendar, CalendarType } from "../interface/entity";

const schema = new Schema<Calendar>(
  {
    type: {
      type: String,
      required: true,
      enum: CalendarType,
      default: CalendarType.MONTHLY,
    },
    start: { type: String, required: false },
    end: { type: String, required: false },
    users: [
      {
        name: { type: String, required: true },
        color: { type: String, required: true },
        avail: [
          {
            start: { type: String, required: true },
            end: { type: String, required: true },
          },
        ],
        unavail: [
          {
            start: { type: String, required: true },
            end: { type: String, required: true },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default model<Calendar>("Calendar", schema);
