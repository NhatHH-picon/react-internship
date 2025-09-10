import Avatar from "./CardHeader/Avatar";
import ReadPost from "./CardHeader/ReadPost";

type CardHeaderProps = {
    src: string;
};
export default function CardHeader({ src }: CardHeaderProps) {
    return (
        <div className="card-header">
            <div className="avatar-row">
                <Avatar src={src} alt="Avatar" />
                <ReadPost />
            </div>
        </div>
    )
}