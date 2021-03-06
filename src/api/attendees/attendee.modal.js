import { Schema, model } from "mongoose";

/**
 *
 * @type {module:mongoose.Schema<any>}
 */
const attendeeSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    previlege: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Attendees", attendeeSchema);
