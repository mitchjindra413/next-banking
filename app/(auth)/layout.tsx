export default function AuthRootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={"flex h-screen w-full font-inter"}>
            {children}
        </main>
    );
}