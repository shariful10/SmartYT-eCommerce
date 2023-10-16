import "./css/globals.css";
import type { Metadata } from "next";
import Header from "./../components/Header";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hone | SmartYT",
	description: "The shopping mart",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-main-bg text-darkText`}>
				<Layout>
					<Header />
					{children}
				</Layout>
			</body>
		</html>
	);
}
