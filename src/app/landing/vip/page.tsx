import { redirect } from "next/navigation";
import { livePrototypePaths } from "@/lib/live-prototype";

export default function VipLandingPage() {
  redirect(livePrototypePaths.vip);
}
