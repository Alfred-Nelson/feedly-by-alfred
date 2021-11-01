export const datefy = (allNews) => {
    let today = new Date().toLocaleString(undefined, { 
                                                    year: 'numeric', 
                                                    month: 'short', 
                                                    day: 'numeric'
                                                })

    if(today.split(" ")[0].length === 1){
        today= "0"+today
    }
    const necessaryNews = allNews.filter((news) => news.date.slice(0,11) === today)
    return necessaryNews.slice(0,5)
}