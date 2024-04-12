import { useRef } from "react"
import "../../style/write/writeContent.scss"

interface WriteContentProps {
    imagePreview: string | null;
}

const WriteContent: React.FC<WriteContentProps> = ({ imagePreview }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleResizeHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    return (
        <>
            <div className="write-content-box">
                <textarea className="write-content-input"
                    ref={textareaRef}
                    rows={11}
                    placeholder="내용을 입력하세요."
                    onChange={handleResizeHeight}
                >
                {imagePreview && <img src={imagePreview} alt="Preview" />}
                </textarea>
            </div>
        </>
    )
}
export default WriteContent
