"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { BrainCircuit, Database, Layers3, Workflow } from "lucide-react";

export function SystemVisual({ compact = false }: { compact?: boolean }) {
  const reduced = useReducedMotion();
  return (
    <div
      className={`system-visual${compact ? " system-compact" : ""}`}
      role="img"
      aria-label="Conceptual diagram connecting applications, intelligence, data, and automation through a central Blynite engineering layer"
    >
      <div className="system-grid" />
      <div className="system-orbit orbit-one" />
      <div className="system-orbit orbit-two" />
      <svg
        className="system-connections"
        viewBox="0 0 560 500"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M100 135H178Q193 135 193 150V230H280M460 132H381Q365 132 365 148V230H280M104 370H177Q193 370 193 354V270H280M459 370H381Q365 370 365 354V270H280"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          className="connection-pulse"
          d="M100 135H178Q193 135 193 150V230H280M280 270H365V354Q365 370 381 370H459"
          stroke="#51B8E5"
          strokeWidth="2"
          pathLength="100"
        />
      </svg>
      <motion.div
        className="system-core"
        animate={reduced ? {} : { y: [0, -7, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="core-top">
          <span />
          <span />
          <span />
        </div>
        <Image src="/brand/symbol-white.svg" alt="" width={800} height={800} />
        <span className="core-caption mono">ENGINEERED TO CONNECT</span>
      </motion.div>
      <div className="system-node node-app">
        <Layers3 size={20} />
        <span>Applications</span>
        <small>EXPERIENCE LAYER</small>
      </div>
      <div className="system-node node-ai">
        <BrainCircuit size={20} />
        <span>Intelligence</span>
        <small>AI & REASONING</small>
      </div>
      <div className="system-node node-data">
        <Database size={20} />
        <span>Data</span>
        <small>CONNECTED SYSTEMS</small>
      </div>
      <div className="system-node node-flow">
        <Workflow size={20} />
        <span>Automation</span>
        <small>THOUGHTFUL WORKFLOWS</small>
      </div>
      <div className="system-baseline mono">
        <span />
        FROM AMBITION TO APPLICATION
      </div>
    </div>
  );
}
