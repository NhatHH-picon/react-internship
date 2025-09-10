type CardTitleProps = {
    text : string;
};
export default function CardTitle({text}: CardTitleProps) {
    return <h2 className="title">{text}</h2>
}