const { questions, users } = require("../model");
const { Op } = require("sequelize");

exports.createMessage = async(req, res) => {
    let { description } = req.body;
    const userId = req.userId;
    let image = req.file ? req.file.filename : "";

    if (!description) {
        description = ""
    }
    if(! description && !req.file){
        return res.status(400).json({ message: "Please enter a message or upload an image"})
    }

    try {
        const message = await questions.create({
            description,
            image,
            userId
        });

        res.status(201).json({ message: "Question created successfully", question: message });
    } catch (error) {
        res.status(500).json({ message: "Error creating question", error });
    }
};

exports.getLoginUserMsg = async (req, res) => {
    const userId = req.userId;

    try {
        const userMsg = await questions.findAll({
            where: { userId },
            include: [
                {
                    model: users,
                    attributes: ['username', 'imageUrl']
                }
            ]
        });

        if (!userMsg.length) {
            return res.status(400).json({ message: "No messages found for this user" });
        }

        res.status(200).json({ message: "User messages found", userMsg });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving user messages", error });
    }
};

exports.getOthersMsg = async (req, res) => {
    try {
        const otherMsg = await questions.findAll({
            where: {
                userId: {
                    [Op.not]: req.userId
                }
            },
            include: [
                {
                    model: users,
                    attributes: ['username', 'imageUrl']
                }
            ]
        });

        if (!otherMsg.length) {
            return res.status(400).json({ message: "No messages found from other users" });
        }

        res.status(200).json({ message: "Messages found", otherMsg });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving messages", error });
    }
};
