const { questions, users } = require("../model");
const { Op } = require("sequelize");

exports.createMessage = async(req,res) => {
    const { description } = req.body;
    const userId = req.userId;
    let image = req.file ? req.file.filename : "";

    if (!description) {
        return res.status(400).json({ message: "Please enter a description" });
    }
        const message = await questions.create({
            description,
            image,
            userId
        });

        res.status(201).json({ message: "Question created successfully", question: message });
    
};

exports.getLoginUserMsg = async (req, res) => {
    const userId = req.userId;

    try {
        const userMsg = await questions.findAll({
            where: { userId },
            include:[
                {
                    model: users,
                    attributes:['username','imageUrl']
                }
            ]

        });

        if (!userMsg.length) {
            return res.status(400).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User found", userMsg });
    } catch (error) {
        res.status(400).json({ message: "Error retrieving user messages" });
    }
};

exports.getOthersMsg = async (req, res) => {
    try {
        const otherMsg = await questions.findAll({
            where: {
                userId: {
                    [Op.not]: req.userId
                },
                include:[
                    {
                        model: users,
                        attributes:['username','imageUrl']
                    }
                ]
            }
        });

        if (!otherMsg.length) {
            return res.status(400).json({ message: "No messages found" });
        }

        res.status(200).json({ message: "Messages found", otherMsg });
    } catch (error) {
        res.status(400).json({ message: "Error retrieving messages" });
    }
};
