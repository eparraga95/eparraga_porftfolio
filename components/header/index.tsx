import Link from "next/link";

export default function Header() {
  return (
    <header className="container text-xl mx-auto py-4 flex justify-center gap-4">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
