import { createFileRoute } from "@tanstack/react-router";
import { IdeasApp } from "@/components/ideas/ideas-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <IdeasApp />;
}
