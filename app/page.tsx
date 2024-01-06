import styles from "./styles.module.scss";

export default function IndexPage() {
  return (
    <div className={styles.homepage}>
      <h1>Please select a pokemon in the search bar</h1>
    </div>
  );
}

export const metadata = {
  title: "Redux Toolkit",
};
