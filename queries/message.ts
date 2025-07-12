import { db } from "@/lib/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

interface Message {
  id: string;
  username: string;
  subject: string;
  message: string;
  createdAt: string;
}

export const getAllMessages = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "messages"));

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: formattedDate(doc.data().createdAt.toDate()),
    })) as Message[];
  } catch (error) {
    console.error("Error fetching messages: ", error);
  }
};

export const deleteMessageById = async (messageId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "messages", messageId));
  } catch (error) {
    console.error("Error deleting message: ", error);
    throw error;
  }
};

export const formattedDate = (dt: Date) => {
  const date = new Date(dt);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Converts to AM/PM format
  });

  return `${formattedDate}, ${formattedTime}`;
};
