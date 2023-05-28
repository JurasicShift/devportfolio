const { sendMail } = require("../../mail.js");

const postcontact = (req, res) => {
    const {subject, email, text} = req.body;

    sendMail( email, subject, text, function(err, data) {
        if(data) {
            console.log("data:", data);

        } else {
          throw new AppError("MESSAGE FAILED. CONTACT US DIRECT ON LEMOTJUSTECHAT@OUTLOOK.COM", 502);
        }
      })
    res.json({message: "return fire"});
}

module.exports = {
    postcontact
}