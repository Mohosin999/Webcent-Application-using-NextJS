// "use client";
// import { useUser } from "@clerk/nextjs";
// import { updateCredit } from "../lib/updatePublicMetaData";

// export default function Dashboard() {
//   const { user } = useUser();

//   return (
//     <div className="text-center">
//       <h1 className="mt-20">Current Credit: {user?.publicMetadata?.credit}</h1>
//       <button
//         className="mt-5 px-10 py-5 bg-green-400"
//         onClick={() =>
//           updateCredit(user?.publicMetadata?.credit + 50, user?.id)
//         }
//       >
//         Update Credit
//       </button>
//     </div>
//   );
// }

"use client";
import { useUser } from "@clerk/nextjs";
import { updateCredit } from "../lib/updatePublicMetaData";

export default function Dashboard() {
  const { user } = useUser();
  console.log("user details -> ", user);

  // const updateCredit = async (credit, userId) => {
  //   try {
  //     const response = await fetch("/api/update-metadata", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         credit: credit,
  //         userId: userId,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to update credit");
  //     }

  //     const data = await response.json();
  //     revalidatePath("/about");
  //     console.log("Credit updated:", data);
  //   } catch (error) {
  //     console.error("Error updating credit:", error);
  //   }
  // };

  return (
    <div className="text-center">
      <h1 className="mt-20">Current Credit: {user?.publicMetadata?.credit}</h1>
      <button
        className="mt-5 px-10 py-5 bg-green-400"
        onClick={() =>
          updateCredit(user?.publicMetadata?.credit + 50, user?.id)
        }
      >
        Update Credit
      </button>
    </div>
  );
}
