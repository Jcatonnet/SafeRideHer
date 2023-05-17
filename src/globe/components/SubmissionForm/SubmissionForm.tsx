import { Box, Button, FormHelperText, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./SubmissionForm.styles.css";
import { joiResolver } from "@hookform/resolvers/joi";
import { submissionFormFieldsSchema } from "./SubmissionFormSchema";
import { useMemo } from "react";
import countries from "../../../utils/countries";
import Select from "react-select";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { height } from "@mui/system";

export type SubmissionFormFields = {
  clubName: string;
  countryName: string;
  cityName: string;
  sportType: string;
  facebook: string;
  instagram: string;
  whatsApp: string;
  description: string;
};
export const SubmissionForm = ({ onSubmit, onCancel, isLoading }: any) => {
  const countryOptions = useMemo(
    () =>
      countries.map(({ label, value, emoji }) => ({
        label,
        value,
        icon: emoji,
      })),
    []
  );
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(submissionFormFieldsSchema),
  });

  return (
    <form
      className="form__general"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {/* register your input into the hook by invoking the "register" function */}
      <div className="subimissionForm__controls">
        <span>Club name *</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control input__same-height"
          required
          {...register("clubName", { required: true })}
          error={Boolean(errors.clubName)}
          helperText={errors.clubName ? String(errors.clubName?.message) : ""}
        />
        <span>Country *</span>
        <Select
          className={
            errors.countryName
              ? "submission__country__error"
              : "submission__country"
          }
          styles={{
            control: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              borderColor: errors.countryName ? "red" : baseStyles.borderColor,
              marginBottom: " 20px",
              minWidth: "100%",
              borderRadius: "8px",
              boxShadow: isFocused
                ? `0 0 0 1px ${errors.countryName ? "red" : "#000"}`
                : baseStyles.boxShadow,
              "&:hover": {
                borderColor: errors.countryName
                  ? "red"
                  : baseStyles.borderColor,
              },
            }),
          }}
          id="countryName"
          required
          isSearchable
          {...register("countryName", { required: true })}
          options={countryOptions}
          getOptionLabel={(country) => `${country.icon} ${country.label}`}
          onChange={(selectedOption) => {
            setValue("countryName", selectedOption?.label);
            clearErrors("countryName");
          }}
          value={countryOptions.find(
            (option) => option.value === watch("countryName")
          )}
        />
        {errors.countryName && (
          <FormHelperText error>Please enter a country</FormHelperText>
        )}

        <span>City *</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control input__same-height"
          required
          {...register("cityName", { required: true })}
          error={Boolean(errors.cityName)}
          helperText={errors.cityName ? String(errors.cityName?.message) : ""}
        />
        <span>Sport(s) type(s) *</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control input__same-height"
          required
          {...register("sportType", { required: true })}
          error={Boolean(errors.sportType)}
          helperText={errors.sportType ? String(errors.sportType?.message) : ""}
        />
        <span>Facebook</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control input__same-height"
          {...register("facebook")}
        />
        <span>Instagram</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control input__same-height"
          {...register("instagram")}
        />
        <span>Whatsapp</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control input__same-height"
          {...register("whatsApp")}
        />
        <span>Note</span>
        <TextField
          variant="outlined"
          multiline
          minRows={6}
          className="subimissionFields__control"
          {...register("description")}
        />
        <Box className="submissionForm__CTA">
          <Button onClick={onCancel}>Cancel</Button>
          <LoadingButton
            className="button__submit"
            variant="contained"
            color="secondary"
            endIcon={<SendIcon />}
            loading={isLoading}
            loadingPosition="end"
            style={{ backgroundColor: "#9c27b0" }}
            type="submit"
            // disabled={isLoading}
          >
            Submit
          </LoadingButton>
        </Box>
      </div>
    </form>
  );
};
