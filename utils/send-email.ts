import { FormDataType } from "@/app/contact/page";

const sendEmail = async (data: FormDataType) => {
  const apiEndpoint = "/api/email";

  const res = fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });

  return await res;
};

export default sendEmail;
