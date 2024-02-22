const sendMail = require("./sendMail")

const TwoSideMails = async (adminSide, userSide) => {

    const options = {
        email: process.env.SMPT_MAIL,
        subject: adminSide?.subject,
        text: 'Hello world?',
        html: adminSide?.html
    }

    const options2 = {
        email: userSide?.email,
        subject: userSide?.subject,
        text: 'Hello world?',
        html: userSide?.html
    }

    sendMail(options)
        .then(async (resu) => {
            await sendMail(options2)
        })
        .catch((error) => {
            return next(new ErrorHandler(error.message, 400));
        })
}

module.exports = TwoSideMails