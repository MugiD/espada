"use server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function editUser(id: string, formData: FormData) {
    await db.user.update({
        where: {
            clerkId: id,
        },
        data: {
            bio: formData.get("bio") as string,
        },
    });

    revalidatePath("/dashboard", "page");
}

export async function createTeam(id: string, formData: FormData) {
    await db.team.create({
        data: {
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            captainId: id
        },
    });

    redirect("/teams");
}

export async function getAnswer(question: string) {
  const { text, finishReason, usage } = await generateText({
    model: openai('gpt-3.5-turbo'),
    prompt: question,
  });

  return { text, finishReason, usage };
}