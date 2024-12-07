"use client";
import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function close() {
    router.back();
    setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-[100] focus:outline-none "
      onClose={close}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/90 " />
      <div className="fixed inset-0 z-10 max-w-[1276px] min-h-screen h-full overflow-y-scroll   mx-auto ">
        <div className="flex  p-4 sm:p-5  items-center justify-center">
          <DialogPanel
            transition
            className=" w-full min-h-screen    rounded-xl bg-color-bg  p-2 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div className="flex justify-end px-4 pb-2 ">
              <CloseButton
                className={
                  "bg-red-100/10 text-red-400 hover:text-red-600 h-8 w-8 rounded-md"
                }
              >
                X
              </CloseButton>
            </div>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
