import { AnimatePresence, motion } from "motion/react"
import { ReactNode, useMemo } from "react";
import XIVButton from "../xiv-button/XIVButton";

type WindowWrapperProps = {
  active: boolean;
  children?: ReactNode;
  onClose?: () => void;
  subtitle?: ReactNode;
  title?: string;
}

export default function WindowWrapper({
  active,
  children,
  onClose,
  subtitle,
  title,
}: WindowWrapperProps) {
  const _children = useMemo(() => {
    if (children) return children;
  }, [children])

  const _title = useMemo(() => {
    if (title) return title;
  }, [title])

  const _subtitle = useMemo(() => {
    if (subtitle) return subtitle;
  }, [subtitle])

  const _onClose = useMemo(() => {
    if (onClose) return onClose;
  }, [onClose])

  return (
    <div style={{ zIndex: 1000, position: "fixed", paddingTop: "1em" }}>
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="my-element"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="window-wrapper flex flex-col gap-2"
          >
            {/* Title */}
            <div className="flex font-exo items-end justify-between gap-2">
              <div className="font-exo">{_title ?? ""}</div>
              <div className="flex gap-2 items-end">
                {_subtitle ?? null}
                {onClose ? (
                  <XIVButton
                    url={"p/v_03.png"}
                    twcss="!rounded-full w-[28px] h-[28px]"
                    onClick={onClose}
                  />
                ) : null}
              </div>
            </div>

            <div className="divider" />

            <div className="p-1">{_children ?? null}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}