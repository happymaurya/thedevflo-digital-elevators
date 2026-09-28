import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TextEffectProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
};

function animateNode(node: ReactNode, path: string, reducedMotion: boolean): ReactNode {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, index) => {
      if (/^\s+$/.test(part)) return part;
      return (
        <motion.span
          key={`${path}-${index}`}
          className="inline-block will-change-transform"
          variants={{
            hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: "0.55em" },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {part}
        </motion.span>
      );
    });
  }

  if (!isValidElement(node)) return node;
  const element = node as ReactElement<{ children?: ReactNode }>;
  return cloneElement(
    element,
    undefined,
    Children.map(element.props.children, (child, index) =>
      animateNode(child, `${path}-${index}`, reducedMotion),
    ),
  );
}

export function TextEffect({ children, className, as = "span", delay = 0 }: TextEffectProps) {
  const reducedMotion = Boolean(useReducedMotion());
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        visible: {
          transition: reducedMotion
            ? { delayChildren: 0 }
            : { delayChildren: delay, staggerChildren: 0.065 },
        },
      }}
    >
      {Children.map(children, (child, index) => animateNode(child, `word-${index}`, reducedMotion))}
    </Component>
  );
}