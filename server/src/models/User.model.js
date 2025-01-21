import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const addressSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    }, // e.g., "Home" or "Work"
    street: {
      type: String,
      required: true,
      trim: true,
    }, // e.g., "99 Lilian St"
    city: {
      type: String,
      required: true,
      trim: true,
    }, // e.g., "Scarborough"
    state: {
      type: String,
      required: true,
      trim: true,
    }, // e.g., "ON"
    postalCode: {
      type: String,
      required: true,
      trim: true,
    }, // e.g., "M1X 1A4"
    country: {
      type: String,
      required: true,
      trim: true,
    }, // e.g., "Canada"
    coordinates: {
      type: {
        lat: { type: Number, required: true }, // Latitude
        lng: { type: Number, required: true }, // Longitude
      },
      required: true,
    },
    isDefault: {
      type: Boolean,
      default: false,
    }, // Indicates the primary address
  },
  { _id: false }
);

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: addressSchema,
      // required: true,
    },
    avatar: {
      type: String,
      required: true,
      default:
        "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "customer", "delivery", "kitchen"],
      default: "customer",
    },

    phone: {
      type: String,
    },
    accountVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationCode: {
      type: String,
    },
    emailVerificationExpirey: {
      type: Date,
    },
    forgotPasswordToken: {
      type: String,
    },
    forgotPasswordExpirey: {
      type: Date,
    },
  },
  { timestamps: true }
);

//hash password before saving in database
userSchema.pre("save", async function (next) {
  //if password isn't changed skip
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//create a isPasswordCorrect function to check if user password is correct
userSchema.methods.isPasswordCorrect = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateVerificationCode = async function () {
  const otp = Math.floor(Math.random() * 90000) + 10000;

  const hashedOtp = await bcrypt.hash(otp.toString(), 10);

  this.emailVerificationCode = hashedOtp;
  this.emailVerificationExpirey = Date.now() + 10 * 60 * 1000;

  return otp;
};

userSchema.methods.verifyOtp= async function (enteredOtp){
  return await bcrypt.compare(enteredOtp, this.emailVerificationCode)
}

export const User = mongoose.model("User", userSchema);
