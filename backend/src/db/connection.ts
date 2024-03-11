import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
  try {
    await connect("mongodb+srv://mrrony:vBerVDuRrr7cY5Qp@cluster0.dfewzxx.mongodb.net/chatbot?retryWrites=true&w=majority&appName=Cluster0");
  } catch (error) {
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };