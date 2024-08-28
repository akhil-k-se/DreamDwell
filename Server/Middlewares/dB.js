const mongoose = require('mongoose')

const url = 'mongodb+srv://akhil2005:hotlineclasher123@cluster0.cigonb3.mongodb.net/DreamDwell?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url,{}).then(()=> {
    console.log("DB COnnected");
}).catch((err)=>{
    console.log(err);
})

const dbConnect = async ()=> {
    try {
        const data = await mongoose.connect(url)
        console.log('DB Connected', data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = dbConnect;