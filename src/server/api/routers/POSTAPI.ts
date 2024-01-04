import { z } from "zod";
import { firestore } from "src/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
const sampleCollection = collection(firestore, "sample");

export const PostAPIRouter = createTRPCRouter({
  postSample: publicProcedure
    .input(z.object({ name: z.string(), email: z.string(), age: z.string() }))
    .mutation(async ({ input }) => {
      const user = {
        name: input.name,
        email: input.email,
        age: input.age,
      };

      await addDoc(sampleCollection, user);
      return { user };
    }),
});
