"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./mdx.module.css";

export function CopyCodeButton({ code }: { code: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <button
      type="button"
      className={styles.copyButton}
      onClick={() => {
        void copy();
      }}
      aria-live="polite"
      title={
        status === "error"
          ? "Select the code and copy it manually"
          : "Copy code"
      }
    >
      {status === "copied"
        ? "Copied"
        : status === "error"
          ? "Copy unavailable"
          : "Copy code"}
    </button>
  );
}
