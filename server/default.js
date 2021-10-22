import { data } from './constants/data.js'
import news from './modal/News.js'

const DefaultData = async () => {
    try {
        await news.deleteMany({})
        await news.insertMany(data)

        console.log('Data imported Successfully');
    } catch (error) {
        console.log("Error", error);
    }
}

export default DefaultData
