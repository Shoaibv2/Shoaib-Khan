import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);
  return (
    <div className="container">
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div className={styles.blogpost} key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h2>{blogitem.title}</h2>
              </Link>
              <p>{blogitem.content.substring(0, 140)}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}
