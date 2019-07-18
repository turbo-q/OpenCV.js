const express=require('express')
const app=express()


app.use('/opencv.js',express.static('./opencv.js'))
app.use('/utils.js',express.static('./utils.js'))
app.use('/hello.jpg',express.static('./hello.jpg'))
app.use('/dog.jpg',express.static('./dog.jpg'))
app.get('/',(req,res)=>{

    res.sendFile('C:/Users/小钢炮/Desktop/OpenCV.js/test.html')


})




app.listen(3000)