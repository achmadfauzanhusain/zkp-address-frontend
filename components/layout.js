import { Poppins } from "next/font/google";
import { AppKitProvider } from "@/lib/appkit/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export default function Layout({ children }) {
  return (
      <>
        <AppKitProvider>
          <main className={poppins.className + " pb-14"}>
              {children}
          </main>
        </AppKitProvider>
      </>
  )
}