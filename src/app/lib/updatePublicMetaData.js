import { revalidatePath } from "next/cache";

/**
 * Function for update credit
 *
 * @param {Number} credit
 * @param {string} userId
 */
export async function updateCredit(credit, userId) {
  try {
    const response = await fetch("/api/update-metadata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        credit: credit,
        userId: userId,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update credit");
    }

    const data = await response.json();
    revalidatePath("/profile");
    console.log("Credit updated:", data);
  } catch (error) {
    console.error("Error updating credit:", error);
  }
}
