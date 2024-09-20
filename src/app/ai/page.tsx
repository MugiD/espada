"use client";

import { useState } from "react";
import { getAnswer } from "@/actions/action";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <Textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Descibe your idea..."
      />
      <Button
        className="mt-4"
        onClick={async () => {
          const { text } = await getAnswer(question);
          setGeneration(text);
        }}
      >
        Answer
      </Button>
      <h1 className="font-bold mt-6">Idea Review:</h1>
      <div className="mt-4">{generation}</div>
    </div>
  );
}
