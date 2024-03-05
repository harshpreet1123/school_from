import express from 'express';
import mongoose from 'mongoose';
import formRoutes from './routes/formRoutes';
const app=express();
app.use(express.json());
try{
    mongoose.connect('mongodb://localhost:27017/addmissionData');
    console.log('DB Connected');
}catch(e){
    console.log(`${e}`);
}
app.use('/',formRoutes);
app.listen(3000,()=>{
    console.log('server is running on port,3000');
})