/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";

/* Instruments */
import "./styles/globals.css";
import styles from "./styles/layout.module.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />

            <main className={styles.main}>{props.children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}
