import Task from "../../../model/Task";
import { dbConnect,runMiddleware } from "../../../utils/index";
import Morgan from "morgan";

dbConnect();

export default async(req,res)=>{
    const{
        method,
        body,
        query:{id},
    }=req;
    const morgan = Morgan("dev");

    switch (method){
        case "GET":
            try {
                const tasks = await Task.findById(id);
                if(!tasks) return res.staus(404).json({msg:"Task doesn't exist"})
                await runMiddleware(req,res,morgan);
                return res.status(200).json(tasks);
            } catch (err) {
                return res.status(400).json({msg:err.message});
            }
            case "DELETE":
                try {
                    const deletedTask = await Task.findByIdAndDelete(id);
                    if(!deletedTask) return res.staus(404).json({msg:"Task doesn't exist"})
                    await runMiddleware(req,res,morgan);
                    return res.status(204).json();
                } catch (err) {
                    return res.status(400).json({msg:err.message});
                }
                case "PUT":
                    try {
                        const updateTask = await Task.findByIdAndUpdate(id,body,{
                            new:true,
                            runValidators:true,
                        });
                        if(!updateTask)
                        return res.status(404).json({msg:"Task doesn't exists"});
                        return res.status(200).json(updateTask);
                    } catch (err) {
                        return res.status(400).json({msg:err.message});
                    }
    }
};