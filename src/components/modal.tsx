import { Dialog } from "@headlessui/react";
import { clsx } from "clsx";
import type { PropsWithChildren } from "react";

type ModalProps = PropsWithChildren<{
  open: boolean;
  className?: string;
  modalClassName?: string;
  closePanelOnClick?: boolean;
  closeModal: () => void;
}>;

export function Modal({
  open,
  children,
  className = "grid place-items-center",
  modalClassName,
  closePanelOnClick,
  closeModal,
}: ModalProps): JSX.Element {
  return (
    <>
      <div>
        {open && (
          <Dialog
            className="relative z-50"
            open={open}
            onClose={closeModal}
            static
          >
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
            <div
              className={clsx("fixed inset-0 overflow-y-auto p-4", className)}
            >
              <Dialog.Panel
                className={modalClassName}
                onClick={closePanelOnClick ? closeModal : undefined}
              >
                {children}
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </div>
    </>
  );
}
