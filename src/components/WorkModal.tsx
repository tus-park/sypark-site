import { useEffect, useRef } from "react";
import type { Work } from "../types/workData";
import MediaSection from "./MediaSection";

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
                    <div className="modal__head"><h4>{work.title}</h4></div>
                    <div className="modal__content">
                        <div className="detail__info">
                            <div className="detail__thumb"> <img src={work.thumbnail} /> </div>
                            <dl className="detail__sub">
                                <dt>Period :</dt>
                                <dd> {work.start_date} - {work.end_date}</dd>
                                <dt>Parts :</dt>
                                <dd> {work.part} </dd>
                                <dt>Description :</dt>
                                <dd> {work.description} </dd>
                            </dl>
                        </div>
                        {/* 기본 정보 */}
                        
                        
                            <MediaSection
                            className="screenshot"
                            title="Screenshot"
                            description={work.screenshot_info}
                            items={work.screenshot}
                            />
                            <MediaSection
                            title="Additional"
                            className="additional"
                            description={work.additional}
                            items={work.add_images}
                            />
                        
                    </div>
                    <button className="modal__btn next" type="button" onClick={onNext}>Next <span>→</span></button>
                    <button className="modal__btn prev" type="button" onClick={onPrev}><span>←</span> Prev</button>
                    <button className="modal__btn close" type="button" onClick={onClose}>close <span>✕</span></button>
                </div>
            )}
        </dialog>
    )
}