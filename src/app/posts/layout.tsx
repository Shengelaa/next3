"use client";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const handlePost = () => {
    router.back();
  };
  return (
    <div>
      {children}
      <button onClick={handlePost}>Post was Added</button>
    </div>
  );
}
