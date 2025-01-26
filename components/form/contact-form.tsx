import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Your Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name")}
            className="w-full dark:border-[#212e54] "
          />
          {errors.name && (
            <span className="text-red-600 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Your Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className="w-full dark:border-[#212e54] "
          />
          {errors.email && (
            <span className="text-red-600 text-sm">{errors.email.message}</span>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Subject
        </label>
        <Input
          id="subject"
          type="text"
          placeholder="Project Inquiry"
          {...register("subject")}
          className="w-full dark:border-[#212e54] "
        />
        {errors.subject && (
          <span className="text-red-600 text-sm">{errors.subject.message}</span>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Your Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          rows={5}
          {...register("message")}
          className="w-full dark:border-[#212e54] "
        />
        {errors.message && (
          <span className="text-red-600 text-sm">{errors.message.message}</span>
        )}
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <Button
            type="submit"
            className="w-full bg-[var(--primary-button)] text-[#fff] hover:bg-[var(--primary-button)] font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <motion.div
                className="h-5 w-5 rounded-full border-t-2 border-r-2 border-white"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </motion.div>
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
