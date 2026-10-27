import { ChangeBokhusDomain } from "@/components/global/ChangeBokhusDomain";
import { auth, currentUser } from "@clerk/nextjs/server";
import { SignIn } from "../Register/SignIn";
import { registerSchema } from "../Register/registerSchema";
import { UserData } from "../Register/registerSchema";
import { redirect } from "next/navigation";
import styles from "./RoutePage.module.css";
import { BokHusCom } from "@/components/common/BokHusCom";

export default async function RoutePage()
{
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated)
    return (<SignIn />);

  const user = await currentUser();
  if (!user)
  {
    return "Unauthorized user";
  }
  const rawData = user.publicMetadata?.userData;

  const validatedData = registerSchema.safeParse(rawData);
  const userData: UserData | null = validatedData.success ? validatedData.data : null;

  if (userData?.preferredLanguage == "Norwegian") redirect("/Register");

  return (
    <main className={`${styles.routePage} fadeInAnim`}>
      <div className={styles.backgroundRoutePage}>
        <BokHusCom fontSize="14rem" />
      </div>
      <ChangeBokhusDomain onPage="Norske" toPage="Engelsk"
        domainUrl="https://www.bokhus.com" />
    </main>
  );
}