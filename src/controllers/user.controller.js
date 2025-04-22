import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { response } from "express";


const registerUser = asyncHandler(async (req,res) => {
  // STEP-1 => get user details from frontend(kya kya detail lenin h vo schema se dekho)
  const { username, fullname, email, password } = req.body;
  console.log("email : ", email);

  // STEP-2 => validation of details (like non-empty)
  if ([fullname, email, username, password].some(() => field?.trim() === "")) {
    throw new ApiError(400, "All fields are reuired");
  }

  // STEP-3 => check if user already exist (by username or email)
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  // STEP-4 => check for images, check for avatar
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.field?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  // STEP-5 => upload them to cloudinary
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  // STEP-6 => create user object - create entry in db
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  // STEP-7 => remove password and refresh token field from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );


  // STEP-8 => check for user creation
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  // STEP-9 => return res
  return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered Successfully")
  )

})


export {registerUser}