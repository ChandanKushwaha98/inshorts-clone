import mongoose from 'mongoose'

const Connection = async () => {
    try {
        const URL = `mongodb+srv://Chandan:12345@cluster0.bzh3n.mongodb.net/INSHORT-CLONE?retryWrites=true&w=majority`

        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected Successfully')
    } catch (error) { console.log("Error while connecting with Database", error) }
}

export default Connection