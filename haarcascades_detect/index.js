const express=require('express')
const app=express()


app.use('/opencv.js',express.static('./opencv.js'))
app.use('/utils.js',express.static('./utils.js'))
app.use('/face.jpg',express.static('./face.jpg'))
app.use('/dog.jpg',express.static('./dog.jpg'))
app.use('/cascades/haarcascade_frontalface_default.xml',express.static('./cascades/haarcascade_frontalface_default.xml'))
app.get('/',(req,res)=>{

    res.sendFile('C:/Users/小钢炮/Desktop/OpenCV.js/haarcascades_detect/index.html')


})




app.listen(3000)