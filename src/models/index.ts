import mongoose from "mongoose";

const DB_URL =
  "mongodb+srv://metatulgaa:CCN7vNSekJCIs16S@cluster0.wgtdab0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export async function connectToDB(): Promise<void> {
  await mongoose.connect(DB_URL);
}
