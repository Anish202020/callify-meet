import { SignIn } from '@clerk/nextjs';
import { CardBody, CardContainer } from "@/components/ui/3d-card";

export default function SiginInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <SignIn />
      </CardBody>
    </CardContainer>
    </main>
  );
}