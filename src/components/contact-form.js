import React from 'react'
import {
    FormControl,
    FormLabel,
    Box,
    Input,
    Textarea,
    Button,
    FormErrorMessage,
    Flex,
    createStandaloneToast,
  } from "@chakra-ui/core";
import { Formik, Form, Field } from "formik"


function validateName(value) {
    let error
    if (value === '') {
      error = "Name is required"
    return error
    }
}

function validateEmail(value) {
    let error
    if (value === '') {
      error = "Email is required"
    return error
    }
}

function validateMessage(value) {
    let error
    if (value ==='') {
      error = "Message is required"
    return error
    }
}

const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

const successToast = createStandaloneToast()

const errorToast = createStandaloneToast()

const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: '',
            }}
            onSubmit={(values, actions) => {
                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded"},
                    body: encode({ "form-name": "contact", ...values })
                })
                .then(() => {
                    successToast({
                        title: "Email Sent!",
                        description: "I will respond as soon as I can.",
                        status: "success",
                        duration: 3000,
                        isClosable: false,
                      })
                    actions.resetForm()
                    successToast.close()
                })
                .catch(() => {
                    errorToast({
                        title: "An error occured.",
                        description: "No email has been sent.",
                        status: "error",
                        duration: 3000,
                        isClosable: false,
                    })
                })
                .finally(() => actions.setSubmitting(false))
            }}
        >
            {(props) => (
                <Box w="100%">
                    <Form name="contact" data-netlify={true}>
                        <Field name="name" validate={validateName}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="name" color="primary.yellow" fontWeight={700} fontSize="xl" fontFamily="heading">Name</FormLabel>
                                    <Input {...field} color="white" borderColor="primary.midBlue" id="name" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="email" validate={validateEmail}>
                            {({ field, form }) => (
                                <FormControl mt={3} isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel htmlFor="email" color="primary.yellow" fontWeight={700} fontSize="xl" fontFamily="heading">Email</FormLabel>
                                    <Input {...field} color="white" borderColor="primary.midBlue" id="email" />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="message" validate={validateMessage}>
                            {({ field, form }) => (
                                <FormControl mt={3} isInvalid={form.errors.message && form.touched.message}>
                                    <FormLabel htmlFor="message" color="primary.yellow" fontWeight={700} fontSize="xl" fontFamily="heading">Message</FormLabel>
                                    <Textarea {...field} color="white" borderColor="primary.midBlue" id="message" />
                                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Flex justify="flex-end" w="100%">
                            <Button
                                mt={4}
                                variant="main"
                                type="submit"
                                isLoading={props.isSubmitting}
                                _hover={{bg: "primary.midBlue"}}
                            >
                                SUBMIT
                            </Button>
                        </Flex>
                    </Form>
                </Box>
            )}
        </Formik>
    )
}

export default ContactForm