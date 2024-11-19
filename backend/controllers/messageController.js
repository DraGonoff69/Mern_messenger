import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
    try {
        const {message}=req.body;
        const {id:recieverId}=req.params.id;
        const {senderId}=req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,recieverId]},

        })

        if(!conversation){
            conversation= await Conversation.create({
                participants:[senderId,recieverId],
            })
        
        }

        const newMesasge=new Message({
            senderId,
            recieverId,
            message
        })
        
        if(newMesasge){
            conversation.messages.push(newMesasge._id);
        }

        res.status(201).json(newMesasge); 

    } catch (error) {
        console.error("Error in sendMessage controller: ",error.message);
        res.status(500).json({message:"Internal server error"});     
    }
}; 