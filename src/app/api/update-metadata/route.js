export async function POST(request) {
  try {
    const body = await request.json(); // Parse the JSON body
    console.log("Request Body:", body);

    // Example: Handle the request (add your actual logic here)
    const updatedMetadata = { ...body }; // Example logic
    return new Response(
      JSON.stringify({ success: true, data: updatedMetadata }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in API:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
