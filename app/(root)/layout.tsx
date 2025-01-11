import SideBar from "@/components/SideBar";

export default function RootLayout({
                                      children,
                                  }: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = {firstname: "Mitchell", lastname: "Test"}

    return (
        <main>
            <SideBar user={loggedIn}/>
            {children}
        </main>
    );
}