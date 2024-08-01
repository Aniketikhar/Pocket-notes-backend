import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    enum: ["#b38bfa", "#ff79f2", "#43e6fc", "#f19576", "#0047ff", "#6691ff"],
    required: true,
  },
  notes: [
    {
      content: {
        type: String,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
},{
    timestamps: true,
  
});

export default mongoose.model("note", notesSchema);
