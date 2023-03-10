const url = "https://randomuser.me/api/";

const getUser = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    let person = data.results[0];

    const { first: firstName, last: lastName } = person.name;
    const { email, phone } = person;
    const { age } = person.dob;
    const { password } = person.login;
    const { number: streetNumber, name: streetName } = person.location.street;

    const { large: imageUrl } = person.picture;

    return {
      url: imageUrl,
      firstName,
      lastName,
      email,
      age,
      streetName,
      streetNumber,
      phone,
      password,
    };
  } catch (err) {
    console.log(err);
    console.log("some error occured");
  }
};

export default getUser;
