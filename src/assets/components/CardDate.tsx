type CardDateProps = {
    date: string;
    readTime: string;
};

export default function CardDate({ date, readTime }: CardDateProps) {
    return <div className="date">{date} • {readTime} read time</div>;
}