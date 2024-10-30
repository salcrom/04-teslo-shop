// Poner entre paréntesis el folder para que no aparezca en la ruta

import { TopMenu } from "@/components";

export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            { children }
        </main>
    );
}
