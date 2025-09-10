type CardTagsProps = {
    tags: string[];
};

export default function CardTags({ tags }: CardTagsProps){
    return (
        <div className="tags">
        {tags.map((tag, index) => (
            <span key ={index}>{tag}</span>
        ))}
        </div>
    )
}