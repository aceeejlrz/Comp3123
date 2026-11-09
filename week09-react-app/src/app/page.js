import Image from "next/image";
import College from "./college";
import Student from "./student";

const STUDENT_ID = "101549617";
const STUDENT_NAME = "Jezrel Ace";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-10 text-center font-sans text-black">
      <Image
        className="h-auto w-64 sm:w-80"
        src="/logo.svg"
        alt="React logo"
        width={320}
        height={285}
        loading="eager"
      />
      <h1 className="text-4xl font-bold sm:text-5xl">
        Welcome to Fullstack Development - I
      </h1>
      <h2 className="text-3xl font-bold">React JS Programming Week09 Lab exercise</h2>
      <Student studentId={STUDENT_ID} name={STUDENT_NAME} />
      <College name="George Brown College" city="Toronto" />
    </main>
  );
}
