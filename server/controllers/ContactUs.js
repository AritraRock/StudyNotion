const { contactUsEmail } = require("../mail/templates/contactFormRes")
const { contactOwnerEmail } = require("../mail/templates/contactFormToOwner")
const mailSender = require("../utils/mailSender")

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body
  console.log(req.body)
  try {
    //email verification on successful submission of form to the user
    const emailRes = await mailSender(
      email,
      "Your Data send successfully to user",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    )
    console.log("Email Res ", emailRes)
    //email to owner
    await mailSender(
      process.env.OWNER_EMAIL,
      "New Contact Us Form Submission",
      contactOwnerEmail(email, firstname, lastname, message, phoneNo, countrycode)
    )
    return res.json({
      success: true,
      message: "Both the emails send successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}
