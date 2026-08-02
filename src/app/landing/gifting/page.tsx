import { redirect } from "next/navigation";
import { livePrototypePaths } from "@/lib/live-prototype";

export default function GiftingLandingPage() {
  redirect(livePrototypePaths.gifting);
}
