import asyncHandler from "express-async-handler";
import { User } from "../models/User.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import sendEmail from "../utils/sendMail.js";
import generateToken from "../utils/generateToken.js";

//verification email template
const generateVerificationEmail = (name, verificationCode) => {
  return `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; background-color: #f9f9f9; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #702f8f; color: white; text-align: center; padding: 20px;">
            <h1 style="margin: 0; font-size: 24px;">Welcome to Our Platform</h1>
          </div>
          <div style="padding: 20px;">
            <h2 style="margin: 0 0 10px;">Hi ${name},</h2>
            <p style="margin: 0 0 15px;">Thank you for joining us! To complete your registration, please use the verification code below:</p>
            <div style="text-align: center; margin: 20px 0;">
              <span style="display: inline-block; padding: 10px 20px; font-size: 20px; font-weight: bold; color: #702f8f; border: 2px solid #702f8f; border-radius: 5px;">${verificationCode}</span>
            </div>
            <p style="margin: 0 0 15px;">This code is valid for 10 minutes.</p>
            <p style="margin: 0;">If you didn’t request this, please ignore this email or contact support if you have questions.</p>
          </div>
          <div style="background-color: #f4f4f4; padding: 10px 20px; text-align: center; font-size: 14px; color: #666;">
            <p style="margin: 0;">Best regards,<br />Rasilo MoMo Team</p>
          </div>
        </div>
      </div>
    `;
};

//get otp and verify user
const verifyOtp = asyncHandler(async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    if (user.accountVerified) {
      return res.status(400).json({ message: "Account already verified" });
    }

    if (user.emailVerificationExpirey < Date.now()) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    const isOtpValid = await user.verifyOtp(otp);

    if (!isOtpValid) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    user.accountVerified = true;
    user.emailVerificationCode = null;
    user.emailVerificationExpirey = null;

    await user.save();

    return res.status(200).json({ message: "Account verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

//while registering a new user
const register = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      // Check if the user's email is verified
      if (userExist.accountVerified) {
        return res.status(400).json({
          message: "User already exists. Please log in.",
        });
      } else {
        // User exists but email is not verified----------iNCOMPLETE
        return res.status(400).json({
          message:
            "User exists but the email is not verified. Please verify your email.",
        });
      }
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    const verificationCode = await user.generateVerificationCode();
    await user.save();

    const emailContent = generateVerificationEmail(
      `${firstName}`,
      verificationCode
    );

    await sendEmail(email, "Verify your Email", emailContent);

    // const createdUser = await User.findById(user._id).select("-password");

    return res
      .status(200)
      .json({ message: "User has been created. Please verify your mail " });
  } catch (error) {
    console.error("Error during user registration:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
});

//login existing user
const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    //------ IF ADDED ANOTHER LOGIN METHOD DO NOT ASK FOR PASSWORD---------//
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    //------------INCOMPLETE----------//
    if (!user.accountVerified) {
      const verificationCode = await user.generateVerificationCode();
      await user.save();

      const emailContent = generateVerificationEmail(
        `${user.firstName}`,
        verificationCode
      );

      await sendEmail(email, "Verify your Email", emailContent);

      return res.status(400).json({ message: "Please verify the mail" });
    }

    const isPassCorrect = await user.isPasswordCorrect(password);

    if (!isPassCorrect) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    const loggedInUser = await User.findById(user._id).select("-password");

    generateToken(res, user._id);

    return res.status(200).json(loggedInUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// to logout user
const logout = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: "LOGGED OUT SUCCESSFUL" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Error Logging out user" });
  }
});



export { register, generateVerificationEmail, verifyOtp, login, logout };
