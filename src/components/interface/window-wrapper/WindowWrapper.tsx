import { AnimatePresence, motion } from "motion/react"
import { ReactNode, useMemo } from "react";

type WindowWrapperProps = {
  active: boolean;
  children: ReactNode;
}

export default function WindowWrapper({
  active,
  children
}: WindowWrapperProps) {
  const _children = useMemo(() => {
    if (children) {
      return children
    }
  }, [children])

  return (
    <AnimatePresence initial={false}>
      {active && (
        <motion.div
          key="my-element"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {_children ?? null}
        </motion.div>
      )}
    </AnimatePresence>
  )
}