import { Box, Button, FormHelperText, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./SubmissionForm.styles.css";
import { joiResolver } from "@hookform/resolvers/joi";
import { submissionFormFieldsSchema } from "./SubmissionFormSchema";
import { useMemo } from "react";
import countries from "../../../utils/countries";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { sportsTypesWthIcon } from "../../../utils/sportsType";

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

  const sportTypeOptions = useMemo(
    () =>
      sportsTypesWthIcon.map(({ label, value, icon }) => ({
        label: (
          <div className="option-label">
            <img src={icon} alt={label} height="20" width="20" />
            <span>{label}</span>
          </div>
        ),
        value,
        icon,
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
        <span className="field__name">Country *</span>
        <Select
          className={
            errors.countryName
              ? "submission__select__error"
              : "submission__select"
          }
          styles={{
            control: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              borderColor: errors.countryName ? "red" : baseStyles.borderColor,
              marginBottom: " 20px",
              minWidth: "100%",
              height: "0px",
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

        <span className="field__name">City *</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control input__same-height"
          required
          {...register("cityName", { required: true })}
          error={Boolean(errors.cityName)}
          helperText={errors.cityName ? String(errors.cityName?.message) : ""}
        />

        <span className="field__name">Sport(s) type(s) *</span>
        <CreatableSelect
          className={
            errors.sportType
              ? "submission__select__error"
              : "submission__select"
          }
          styles={{
            control: (baseStyles, { isFocused }) => ({
              ...baseStyles,
              borderColor: errors.sportType ? "red" : baseStyles.borderColor,
              marginBottom: " 20px",
              minWidth: "100%",
              borderRadius: "8px",
              boxShadow: isFocused
                ? `0 0 0 1px ${errors.sportType ? "red" : "#000"}`
                : baseStyles.boxShadow,
              "&:hover": {
                borderColor: errors.sportType ? "red" : baseStyles.borderColor,
              },
            }),
          }}
          id="sportType"
          required
          isSearchable
          {...register("sportType", { required: true })}
          options={sportTypeOptions}
          getOptionLabel={(option) => option.label}
          getOptionValue={(option) => option.value}
          onChange={(selectedOption) => {
            setValue("sportType", selectedOption?.value);
            clearErrors("sportType");
          }}
          value={sportsTypesWthIcon.find(
            (option) => option.value === watch("sportType")
          )}
        />
        {errors.sportType && (
          <FormHelperText error>Please select a sport type</FormHelperText>
        )}
        <span className="field__name">Facebook</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control input__same-height"
          {...register("facebook")}
        />
        <span className="field__name">Instagram</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control input__same-height"
          {...register("instagram")}
        />
        <span className="field__name">Whatsapp</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control input__same-height"
          {...register("whatsApp")}
        />
        <span className="field__name">Note</span>
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
