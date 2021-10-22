import { useEffect, useState } from "react"
import { getNews } from "../service/API.js";
import Article from "./Article.jsx";
import InfiniteScroll from 'react-infinite-scroll-component';

const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);

    const dailyNews = async () => {
        let res = await getNews(page);
        console.log('res', res);
        setNews([...news, ...res.data])

        // console.log(res.data);
    }

    useEffect(() => {
        dailyNews();
    }, [page])


    return (
        <InfiniteScroll dataLength={news.length} next={() => setPage(page => page + 1)} hasMore={true}>
            {news.map(article => (<Article article={article} />))}
        </InfiniteScroll >

    )
}

export default Articles
