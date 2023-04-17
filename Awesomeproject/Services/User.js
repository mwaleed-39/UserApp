export const AddUser = async (
  FirstName,
  LastName,
  Address,
  Email,
  Phone_no,
  password
) => {
  try {
    const response = await fetch("http://192.168.10.9:5000/User", {
      method: "post",
      body: JSON.stringify({ FirstName, LastName, Address, Email, Phone_no, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};
export const LoginUser = async (Email, password) => {
  try {
    console.log("a");
    const response = await fetch("http://192.168.10.9:5000/User/Login", {
      method: "post",
      body: JSON.stringify({ Email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log("a", err);
  }
};
export async function sendOtp(Email) {
  try {
    // let url = `${REACT_APP_HEROKU}/retailer`;
    console.log(Email);
    var res = await fetch("http://192.168.10.9:5000/User/sendEmail", {
      // let response = await fetch(`${REACT_APP_HEROKU}/retailer`, {
      method: "post",
      body: JSON.stringify({
        Email: Email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var response = await res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
export async function sendRegistrationOtp(Email) {
  try {
    // let url = `${REACT_APP_HEROKU}/retailer`;
    console.log(Email);
    var res = await fetch(
      "http://192.168.10.9:5000/User/sendRegistrationEmail",
      {
        // let response = await fetch(`${REACT_APP_HEROKU}/retailer`, {
        method: "post",
        body: JSON.stringify({
          Email: Email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    var response = await res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
export async function changePassword(Email, Code, Password) {
  try {
    // let url = `${REACT_APP_HEROKU}/retailer`;
    var res = await fetch("http://192.168.10.9:5000/User/changePassword", {
      // let response = await fetch(`${REACT_APP_HEROKU}/retailer`, {
      method: "post",
      body: JSON.stringify({
        Email: Email,
        Code: Code,
        Password: Password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 400) {
      Alert.alert("Invalid OTP");
    } else {
      Alert.alert("Password Updated");
    }
    var response = await res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
export async function verifyPhone(Phone_no) {
  try {
    console.log(Phone_no);
    // let url = `${REACT_APP_HEROKU}/retailer`;
    var res = await fetch("http://192.168.10.9:5000/User/verifyPhone", {
      // let response = await fetch(`${REACT_APP_HEROKU}/retailer`, {
      method: "post",
      body: JSON.stringify({
        Phone_no: Phone_no,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var response = await res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
