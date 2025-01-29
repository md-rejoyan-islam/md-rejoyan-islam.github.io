import { ClientMessages } from "@/components/messages/client-messages";
import { MESSAGE_TYPE } from "@/lib/types";
import { getAllMessages } from "@/queries/message";

export default async function MessagesPage() {
  const messages = (await getAllMessages()) as MESSAGE_TYPE[] | [];

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          Client Messages
        </h1>
        <ClientMessages messages={messages} />
      </div>
    </section>
  );
}
