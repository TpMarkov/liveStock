"use client";
import { Button } from "@/components/ui/button";
import FooterLink from "@/components/ui/forms/footer-link";
import InputField from "@/components/ui/forms/input-field";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="form-title">Welcome back</h1>
      <InputField
        name="email"
        label="Email"
        type="email"
        placeholder="contact@jsmastery.com"
        register={register}
        error={errors.email}
        validation={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
      />{" "}
      <InputField
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register}
        error={errors.password}
        validation={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        }}
      />
      <Button
        variant={"default"}
        className="yellow-btn w-full mt-5"
        disabled={isSubmitting}
        type="submit"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isSubmitting ? "Signing In" : "Sign In"}
      </Button>
      <FooterLink
        text="Don't have an account "
        linkText="Sign up"
        href="/sign-up"
      />
    </div>
  );
};

export default SignIn;
