"use client";

import { useId, useRef } from "react";

import { CloseIcon } from "./icons";
import styles from "./ui.module.css";

export function SearchInput({
  value,
  onChange,
  label,
  placeholder,
  controls,
}: {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  controls: string;
}) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.search}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        type="search"
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        aria-controls={controls}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") onChange("");
        }}
      />
      {value && (
        <button
          type="button"
          className={styles.clearSearch}
          aria-label="Clear search"
          onClick={() => {
            onChange("");
            inputRef.current?.focus();
          }}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
