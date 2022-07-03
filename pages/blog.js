import styles from "../styles/Blog.module.css";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <div className="container">
        <main className={styles.main}>
          <div className={styles.blogpost}>
            <Link href={"/blogpost/xiaomi-12s-sony-img989"}>
              <h3>OnePlus 7 & 7T Getting Android 12</h3>
            </Link>
            <p>
              OnePlus 7 and OnePlus 7T are the company phones in line for an
              Android 12 upgrade,
            </p>
          </div>
          <div className={styles.blogpost}>
            <h3>Poco F4 Review</h3>
            <p>
              The Poco F4 GT was announced and released ahead of the Poco F4
              premiere,
            </p>
          </div>
          <div className={styles.blogpost}>
            <h3> Samsung Galaxy M53 Review</h3>
            <p>
              Another downgrade, and a very tangible one at that, is in the box
              and its
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
