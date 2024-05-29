import { newsOfTicker } from "../api/fetch"
import "./News.css";

export default function News({ info }) {

    console.log(info);

    return (
        <div className="news-container">
            {info.map(obj => 
                <div className="newsitems-container">
                    <div className="box">
                    <img className="images" src={obj.image_url}/>
                    <p className="description">{obj.description}</p>
                    <a className="read-more" href={obj.article_url}>Read more...</a>
                    </div>
                </div>
            )}
        </div>
    )
}