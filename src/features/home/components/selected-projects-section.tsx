"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icons";
import type { FeaturedProject } from "@/features/projects/types/project";

import styles from "./selected-projects-section.module.css";

export function SelectedProjectsSection({
  projects: featuredProjects,
}: {
  projects: readonly FeaturedProject[];
}) {
  const id = useId();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleTabKey(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const count = featuredProjects.length;
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % count;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + count) % count;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = count - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setSelectedIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  if (featuredProjects.length === 0) {
    return (
      <section
        id="work"
        className={styles.section}
        aria-labelledby="work-heading"
      >
        <div className={styles.inner}>
          <h2 className={styles.heading} id="work-heading">
            Out in the world
          </h2>
          <p className={styles.emptyNote}>
            Explore the complete project index.
          </p>
          <Link className={styles.projectLink} href="/projects">
            All projects <ArrowRightIcon />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      id="work"
      className={styles.section}
      aria-labelledby="work-heading"
    >
      <div className={styles.inner}>
        <h2 className={styles.heading} id="work-heading">
          Out in the world
        </h2>

        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Selected projects"
        >
          {featuredProjects.map((project, index) => (
            <button
              key={project.slug}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${project.slug}`}
              aria-controls={`${id}-panel-${project.slug}`}
              aria-selected={selectedIndex === index}
              tabIndex={selectedIndex === index ? 0 : -1}
              className={styles.tab}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => handleTabKey(event, index)}
            >
              {project.name}
            </button>
          ))}
        </div>

        {featuredProjects.map((project, index) => (
          <div
            key={project.slug}
            role="tabpanel"
            id={`${id}-panel-${project.slug}`}
            aria-labelledby={`${id}-tab-${project.slug}`}
            hidden={selectedIndex !== index}
            tabIndex={0}
            className={styles.panel}
          >
            {project.cover && (
              <Link
                href={project.href}
                className={styles.projectPreview}
                aria-label={`View case study: ${project.name}`}
              >
                <Image
                  src={project.cover}
                  alt={project.coverAlt}
                  fill
                  sizes="(max-width: 1280px) 90vw, 1280px"
                  unoptimized
                />
              </Link>
            )}
            <div className={styles.projectNote}>
              <h3>{project.headline}</h3>
              <p>{project.summary}</p>
              {project.placeholder && (
                <span className={styles.draft}>Draft case study</span>
              )}
            </div>
            <div className={styles.projectDetails}>
              <ul className={styles.technologies} aria-label="Technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <Link
                className={styles.projectLink}
                href={project.href}
                aria-label={`Read case study: ${project.name}`}
              >
                Read case study <ArrowRightIcon />
              </Link>
            </div>
          </div>
        ))}
        <Link className={styles.projectLink} href="/projects">
          All projects <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
