"use client";

import { MESSAGE_TYPE } from "@/lib/types";
import { deleteMessageById } from "@/queries/message";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCard } from "./message-card";

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  message: string;
}

export function ClientMessages({
  messages = [],
}: {
  messages: MESSAGE_TYPE[];
}) {
  const handleDelete = async (id: string) => {
    await deleteMessageById(id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <MessageCard message={message} onDelete={handleDelete} />
          </motion.div>
        ))}
        {messages.length === 0 && (
          <div className="col-span-3 text-center text-gray-500 dark:text-gray-400">
            No messages found.
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
