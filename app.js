const express=require('express');
const app=express();

const itemRouter= require('./routers/itemsRouter');

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('api/v1/item' , itemRouter);

module.exports=app;