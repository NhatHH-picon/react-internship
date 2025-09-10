type CardPreviewProps = {
    src: string;
    alt: string;
}

export default function CardPreview({src, alt }: CardPreviewProps){
    return (
        <div className="preview">
            <img src={src} alt={alt || "preview"} />
        </div>
    );
}