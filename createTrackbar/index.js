const express=require('express')
const app=express()
const fs=require('fs')

app.use('/img',express.static('./img'))
app.use('/opencv.js',express.static('../opencv.js'))
app.use('/utils.js',express.static('../utils.js'))
app.get('/',function(req,res){

        // res.send(data)
        res.sendFile('C:/Users/小钢炮/Desktop/OpenCV.js/createTrackbar/index.html')
     

   
})

app.listen(3000)