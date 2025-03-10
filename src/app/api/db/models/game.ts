import { GameStatusKey } from "@/app/types";
import mongoose, { model, Schema } from "mongoose";

export interface Game {
  _id: string;
  externalId: number;
  name: string;
  status: GameStatusKey;
  image?: string;
}

const gameSchema = new Schema<Game>({
  name: { type: String, required: true },
  status: { type: String, required: true },
  externalId: { type: Number, required: true },
  image: String
});

export default mongoose.models.Game || model<Game>('Game', gameSchema);
