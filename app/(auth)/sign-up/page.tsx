"use client";
import { Button } from "@/components/ui/button";
import { CountrySelectField } from "@/components/ui/forms/country-select";
import FooterLink from "@/components/ui/forms/footer-link";
import InputField from "@/components/ui/forms/input-field";
import SelectField from "@/components/ui/forms/select-field";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Inputs */}
        <InputField
          name="fullName"
          label="Full Name"
          register={register}
          error={errors.fullName}
          placeholder="John Doe"
          validation={{ required: "Full name is required", minLength: 2 }}
        />{" "}
        <InputField
          name="email"
          label="Email"
          type="email"
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          }}
          register={register}
          error={errors.email}
          placeholder="contact@jsmmastery.com"
        />{" "}
        <InputField
          name="password"
          label="Password"
          type="password"
          validation={{ required: "Password is requried", minLenght: 8 }}
          register={register}
          error={errors.password}
          placeholder="Enter a strong password"
        />
        {/* Country */}
        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
        />
        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />{" "}
        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk tolerance"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />{" "}
        <SelectField
          name="preferredIndustry"
          label="Prefered Industry"
          placeholder="Select you investment goal"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />
        <Button disabled={isSubmitting} className="yellow-btn w-full mt-5">
          {isSubmitting ? "Creating account" : "Start your investing journey"}
        </Button>
        <FooterLink
          text="Already have an account "
          linkText="Sign in"
          href="/sign-in"
        />
      </form>
    </>
  );
};

export default SignUp;
