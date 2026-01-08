import { useEffect, useRef } from "react";

interface ModalProps {
  title: string;
  contents: string;
}

const Modal = ({title, contents}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 m-auto w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg"
    >
      <header className="flex gap-2 mb-4">
        <span className="material-symbols-outlined">info</span>
        <h1 className="font-bold text-lg">{title}</h1>
      </header>
      <p className="mb-6">{contents}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-500 cursor-pointer"
        onClick={() => dialogRef.current?.close()}
      >
        Close
      </button>
    </dialog>
  );
};

export default Modal;
