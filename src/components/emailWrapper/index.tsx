import React, { useEffect, useRef, useState } from "react";
import { Correct, DeliveredText, HeadingStyled, Wrapper } from "./styled";
import emailjs from "emailjs-com";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { MailData } from "../../constans/mailjs";
import { Text } from "@chakra-ui/layout";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { motion, useAnimation } from "framer-motion";

export const EmailWrapper = () => {
  const form = useRef<any>();
  const nameInput = useRef<any>();
  const emailInput = useRef<any>(null);
  const textInput = useRef<any>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [isButtonsActive, setIsButtonsActive] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    isSend ? controls.start("start") : controls.start("stop");
  }, [controls, isSend]);

  const sendEmail = () => {
    setIsSending(true);
    emailjs
      .sendForm(
        MailData.YOUR_SERVICE_ID,
        MailData.YOUR_TEMPLATE_ID,
        form.current,
        MailData.YOUR_USER_ID
      )
      .then(
        (result) => {
          result.status === 200 ? setIsSending(false) : setIsSending(true);
          result.status === 200 && setIsSend(true);
          result.status === 200 && setIsButtonsActive(false);
          console.log(result.status);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Wrapper>
        {isSend ? (
          <motion.div
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.7, 1, 1, 0],
            }}
            transition={{ duration: 4 }}
            onAnimationComplete={() => setIsSend(false)}
          >
            <Correct></Correct>
          </motion.div>
        ) : (
          <motion.div
            animate={{
              opacity: [0, 1],
              scale: [0.9, 1],
            }}
          ></motion.div>
        )}
        {isButtonsActive ? (
          <>
            <HeadingStyled>napisz do nas</HeadingStyled>
            <form ref={form} onSubmit={sendEmail}>
              <label>
                <Text>Imię</Text>
              </label>
              <Input required ref={nameInput} type="text" name="from_name" />
              <label>
                <Text>Email</Text>
              </label>
              <Input required ref={emailInput} type="email" name="user_email" />
              <label>
                <Text>Wiadomość</Text>
              </label>
              <Textarea required ref={textInput} name="message" />

              <ButtonGroup>
                <Button
                  type="submit"
                  value=""
                  fontWeight="400"
                  isLoading={isSending}
                  bg="#008000"
                >
                  wyślij
                </Button>

                <div onClick={() => setIsSending(false)}>
                  <Button type="reset" value="" fontWeight="400" bg="#008000">
                    reset
                  </Button>
                </div>
              </ButtonGroup>
            </form>
          </>
        ) : (
          <>
            <HeadingStyled>Dziękujemy !</HeadingStyled>
            <DeliveredText>Twoja wiadomość została wysłana</DeliveredText>
          </>
        )}
      </Wrapper>
    </>
  );
};
