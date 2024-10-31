// Poner entre paréntesis el folder para que no aparezca en la ruta

import { Sidebar, TopMenu } from "@/components";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">

            <TopMenu />
            <Sidebar />

            <div className="px-0 sm:px-10">
                { children }
            </div>

        </main>
    );
}
