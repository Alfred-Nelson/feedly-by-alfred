export const datefy = (allNews) => {
    const today = new Date().toLocaleString(undefined, { 
                                                    year: 'numeric', 
                                                    month: 'short', 
                                                    day: 'numeric'
                                                })
    const necessaryNews = allNews.filter((news) => news.date.slice(0,11) === today)
    return necessaryNews.slice(0,5)
}