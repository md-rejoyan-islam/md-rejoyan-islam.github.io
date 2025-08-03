"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { MESSAGE_TYPE } from "@/lib/types";
import { Trash2, X } from "lucide-react";

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  message: string;
}

interface UserCardProps {
  readonly onDelete: (id: string) => void;
  readonly message: MESSAGE_TYPE;
}

export function MessageCard({ onDelete, message }: UserCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = () => {
    onDelete(message.id);
    setIsDialogOpen(false);
  };

  const cardColors = [
    "bg-gradient-to-br from-pink-400 to-purple-500",
    "bg-gradient-to-br from-green-400 to-blue-500",
    "bg-gradient-to-br from-yellow-400 to-orange-500",
    "bg-gradient-to-br from-blue-400 to-indigo-500",
  ];

  const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)];

  return (
    <>
      <motion.div
        className={`rounded-lg p-6 shadow-lg ${randomColor} text-white overflow-hidden relative h-full`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full -ml-8 -mb-8" />

        <h2 className="text-2xl font-bold mb-2">{message.name}</h2>
        <p className="text-sm opacity-80 mb-1">{message.email}</p>
        <p className="text-xs opacity-70 mb-3">Created: {message.createdAt}</p>
        <p className="text-sm mb-4 bg-white bg-opacity-20 p-3 rounded-md">
          {message.message}
        </p>

        <div className="pt-4">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="absolute bottom-3 right-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1 rounded-md text-sm flex items-center transition-colors duration-200"
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Delete
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-sky-500 bg-opacity-70 flex items-center justify-center z-[1050]"
            onClick={() => setIsDialogOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-[#071124]/90 rounded-lg p-6 w-full max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400"
              >
                <X size={24} />
              </button>
              <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">
                Confirm Deletion
              </h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">
                Are you sure you want to delete this user? This action cannot be
                undone.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="px-4 py-2 border border-gray-300 dark:bg-gray-200 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
