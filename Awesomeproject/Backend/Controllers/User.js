const User = require("../Models/User");
const Otp = require("../Models/Otp");
const nodemailer = require("nodemailer");

exports.addUser = async (req, res) => {
  let loadedUser;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Address = req.body.Address;
  const Email = req.body.Email;
  const Phone_no = req.body.Phone_no;
  const password = req.body.password;
  let user = new User({
    FirstName: FirstName,
    LastName: LastName,
    Address: Address,
    Email: Email,
    Phone_no: Phone_no,
    password: password,
  });
  const match = await User.findOne({ Phone_no: Phone_no });
  if (match) {
    console.log("DUPLICATE ");
    return res.status(400).json({ message: "Not found" });
  }
  console.log(" asdasd");
  await user.save();

  // res.send({ token: token, userId: loadedUser._id.toString() });
  res.send();
};

exports.UserLogin = async (req, res) => {
  const Email = req.body.Email;
  const password = req.body.password;
  const user = await User.findOne({ Email: Email });
  if (!user) {
    console.log("Phone no NOT FOUND OR PASSWORD NOT MATCHED ");
    res.status(400).json({ message: "Not found" });
    return;
  }
  loadedUser = user;
  const ismatch = await User.findOne({ password: password });
  if (ismatch) {
    console.log("LOGGED IN SUCCESSFULLY ");
    res.send({ password });
  } else {
    console.log("Name NOT FOUND OR PASSWORD NOT MATCHED ");
    res.send("Not found");
  }
};
exports.sendEmail = async (req, res) => {
  const Email = req.body.Email;
  console.log(Email);
  let data = await User.findOne({ Email: Email });
  if (data) {
    console.log("asdd");
    let otpcode = Math.floor(Math.random() * 10000 + 1);
    let otpData = new Otp({
      Email: req.body.Email,
      Code: otpcode,
      ExpiresIn: new Date().getTime() + 360 * 1000,
    });
    let otpResponse = await otpData.save();
    mailer(Email, otpcode);
    res.send({ Email });
    res.send();
    // res.status(200).json(200);
  } else {
    res.send("Failed");
    // res.status(200).json(200);
  }
};

exports.sendRegistrationEmail = async (req, res) => {
  console.log("asdd");
  const Email = req.body.Email;
  let otpcode = Math.floor(Math.random() * 10000 + 1);
  let otpData = new Otp({
    Email: Email,
    Code: otpcode,
    ExpiresIn: new Date().getTime() + 360 * 1000,
  });
  let otpResponse = await otpData.save();
  mailer(Email, otpcode);
  res.send({ Email });
  res.send();
  // res.status(200).json(200);
  // res.status(200).json(200);
};

exports.changePassword = async (req, res) => {
  console.log(req.body.Email);
  const password = req.body.Password;
  // const hash = bcrypt.genSaltSync(10);
  // const password = bcrypt.hashSync(hashedpassword, hash);
  let data = await Otp.findOne({ Code: req.body.Code });
  if (data) {
    let currentTime = new Date().getTime();
    let diff = data.ExpiresIn - currentTime;
    if (diff < 0) {
      res.send("Token Expired");
    } else {
      let user = await User.findOne({ Email: req.body.Email });
      user.password = password;
      user.save();
    }
  } else {
    console.log("sad");
    res.status(400).json({ message: "wrong otp" });
  }
};
const mailer = (Email, otpcode) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "muhammadwaleedashfaq2020@gmail.com",
      pass: "brqcoxgulkybjvmi",
    },
  });
  var mailOptions = {
    from: "muhammadwaleedashfaq2020@gmail.com",
    to: Email,
    subject: "Password Recovery",
    text: `Your otp to recover password is ${otpcode}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent " + info.response);
    }
  });
};
exports.verifyPhone = async (req, res) => {
  const Phone_no = req.body.Phone_no;
  console.log(Phone_no);
  const match = await User.findOne({ Phone_no: Phone_no });
  if (match) {
    console.log("DUPLICATE ");
    res.send("DUPLICATE ENTRY FOUND");
    return;
  } else {
    res.send({ Phone_no });
    res.send();
  }
};
// exports.addRetailer = async (req, res) => {
//   let loadedUser;
//   const FirstName = req.body.FirstName;
//   const LastName = req.body.LastName;
//   const Email = req.body.Email;
//   const Phone_no = req.body.Phone_no;
//   const hashedpassword = req.body.password;
//   const RegionId = req.body.RegionId;
//   const hash = bcrypt.genSaltSync(10);
//   const password = bcrypt.hashSync(hashedpassword, hash);
//   let data = await Otp.findOne({ Code: req.body.Code });
//   if (data) {
//     console.log(req.body.Code);
//     let currentTime = new Date().getTime();
//     let diff = data.ExpiresIn - currentTime;
//     if (diff < 0) {
//       res.send("Token Expired");
//     } else {
//       let user = new User({
//         FirstName: FirstName,
//         LastName: LastName,
//         Email: Email,
//         Phone_no: Phone_no,
//         password: password,
//         RegionId: RegionId,
//       });
//       await user.save();
//       loadedUser = user;
//       const token = jwt.sign(
//         {
//           Phone_no: loadedUser.Phone_no,
//           userId: loadedUser._id.toString(),
//         },
//         "SAM",
//         { expiresIn: "24h" }
//       );
//       console.log(token);
//       res.send({ token: token, userId: loadedUser._id.toString() });
//       res.send();
//     }
//   } else {
//     res.send("Invalid otp");
//   }
// };
