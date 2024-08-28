"use client";

import sendEmail from "@/utils/send-email";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export type FormDataType = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [data, setData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    text: string | undefined;
    status: "error" | "success";
  }>({
    text: undefined,
    status: "error",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = async (e: React.FormEvent, data: FormDataType) => {
    setLoading(true);
    setIsValid(false);
    e.preventDefault();
    const email = await sendEmail(data);
    if (email) {
      setLoading(false);
      setMessage({
        text: "Message sent!",
        status: "success",
      });
      setTimeout(() => {
        setData({
          message: "",
          email: "",
          name: "",
        });
        setMessage({
          text: undefined,
          status: "error",
        });
      }, 1000);
    } else {
      setLoading(false);
      setMessage({
        text: "There was an error sending your message",
        status: "error",
      });
    }
  };

  useEffect(() => {
    const { name, email } = data;
    if (name === "" || data.message === "" || email === "") {
      setIsValid(false);
    } else setIsValid(true);
  }, [data]);

  return (
    <div className="px-4 py-2 flex flex-col w-full gap-4 items-center">
      <div className="font-bold text-5xl text-purple-600 flex text-start w-full">
        contact
      </div>
      <div className="py-4 flex flex-col gap-4 w-full items-center justify-center">
        <div className="font-bold text-2xl">Connect with Me!</div>
        <form
          className="flex flex-col gap-4 w-full md:w-4/5 lg:w-3/5 items-center justify-center"
          onSubmit={(e) => onSubmit(e, data)}
        >
          <TextField
            name="name"
            value={data.name}
            label="Name"
            required
            onChange={handleChange}
            className="w-full"
            InputProps={{
              endAdornment: (
                <IconButton
                  size="small"
                  onClick={() => setData({ ...data, name: "" })}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              ),
            }}
          />
          <TextField
            name="email"
            required
            value={data.email}
            label="Email"
            onChange={handleChange}
            className="w-full"
            type="email"
            InputProps={{
              endAdornment: (
                <IconButton
                  size="small"
                  onClick={() => setData({ ...data, email: "" })}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              ),
            }}
          />
          <TextField
            multiline
            maxRows={4}
            name="message"
            value={data.message}
            label="Message"
            required
            onChange={handleChange}
            className="w-full"
            InputProps={{
              endAdornment: (
                <IconButton
                  size="small"
                  onClick={() => setData({ ...data, message: "" })}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              ),
            }}
          />
          {message.text && (
            <div
              className={
                message.status === "error"
                  ? "p-2 border-solid rounded-md border-2 border-red-600 text-red-600 font-bold"
                  : "p-2 border-solid rounded-md border-2 border-green-600 text-green-600 font-bold"
              }
            >
              {message.text}
            </div>
          )}
          <Button
            variant="contained"
            type="submit"
            size="large"
            disabled={!isValid}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </form>
        <div className="text-center text-sm md:text-base text-purple-600 font-bold mt-4">
          Thank you so much for checking out my portfolio, any feedback or
          advice would be greatly appreciated!
        </div>
      </div>
    </div>
  );
};

export default Contact;
