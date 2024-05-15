"use client";

import Link from "next/link";
import styles from "../app/styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
}

export default function Movie({ id, title, poster_path }: MovieProps) {
  const router = useRouter();
  const onClickImg = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClickImg} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
