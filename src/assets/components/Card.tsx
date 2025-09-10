import CardHeader from "./CardHeader"
import CardTitle from "./CardTitle"
import CardTags from "./CardTags"
import CardDate from "./CardDate"
import CardPreview from "./CardPreview"
import CardFooter from "./CardFooter/CardFooter"
function Card() {
  return (
    <div className="card">
        <div className="card-header">       
                <CardHeader src="https://media.daily.dev/image/upload/t_logo,f_auto/v1655817725/logos/community" />
                <CardTitle text="10 AI Frameworks and Libraries Every Developer Should Learn in 2025" />
        </div>
        <div className="tags">
            <CardTags tags={['AI', 'Machine Learning', 'Deep Learning', 'GPT']} />
        </div>
        <CardDate date="Jul 21" readTime="7m" />
        <CardPreview src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/3bc8dc2f589ef7371a24ca039669557a?_a=AQAEulh" alt="preview" />
        <CardFooter upvotes={283} comments={3} />
      </div>
  );
}

export default Card