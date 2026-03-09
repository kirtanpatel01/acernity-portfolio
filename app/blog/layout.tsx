import Container from "../components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acernity - Portfolio",
  description: "Freelance tailored personal portfolio design t for developer",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;  
}>) {
  return (
    <Container className="min-h-screen px-10 md:pt-20 md:pb-10 prose">{children}</Container>
  );
}
