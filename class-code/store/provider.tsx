import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}

// if you are using redux with new NextJS version in layout.tsx you can use it like this after import:
{/* 
<Providers>
    {children}
</Providers> 
*/}
