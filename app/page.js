import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-black text-white">
      <h1>Main Route </h1>
      <Link href="/signin">Sign In</Link>
    </div>
  );
}
