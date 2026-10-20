import { useEffect, useRef } from "react";
import type { Work } from "../types/types";

interface Props {
    work : Work | null;
    onClose :  () => void;
    onPrev :  () => void;
    onNext :  () => void;
}

export default function WorkModal({ work, onClose, onPrev, onNext} : Props) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;
        if (work && !dialog.open) dialog.showModal();
        if (!work && dialog.open) dialog.close();
    }, [work]);

    return (
        <dialog
            ref={ref}
            className="modal"
            onClose={onClose}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            {work && (
                <div className="modal__body">
                    <h3>{work.title}</h3>
                    <button type="button" onClick={onPrev}>이전</button>
                    <button type="button" onClick={onNext}>다음</button>
                    <button type="button" onClick={onClose}>닫기</button>
                </div>
            )}
        </dialog>
    )
}