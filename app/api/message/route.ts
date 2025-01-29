export async function GET(): Promise<Response> {
  return new Response(
    JSON.stringify({
      message: "Hello, API!",
      data: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
        {
          id: 3,
          name: "John Smith",
          time: Date.now(),
        },
      ],
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
}
