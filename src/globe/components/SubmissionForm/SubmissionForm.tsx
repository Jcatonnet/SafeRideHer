import { Box, Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./SubmissionForm.styles.css";
import { joiResolver } from "@hookform/resolvers/joi";
import { submissionFormFieldsSchema } from "./SubmissionFormSchema";

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
export const SubmissionForm = ({ onSubmit, onCancel }: any) => {
  const {
    register,
    handleSubmit,
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
        <span>Club Name *</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control"
          required
          {...register("clubName", { required: true })}
          error={Boolean(errors.clubName)}
          helperText={errors.clubName ? String(errors.clubName?.message) : ""}
        />
        <span>Country *</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control"
          required
          {...register("countryName", { required: true })}
          error={Boolean(errors.countryName)}
          helperText={
            errors.countryName ? String(errors.countryName?.message) : ""
          }
        />
        <span>City *</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control"
          required
          {...register("cityName", { required: true })}
          error={Boolean(errors.cityName)}
          helperText={errors.cityName ? String(errors.cityName?.message) : ""}
        />
        <span>Sport(s) type(s) *</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control"
          required
          {...register("sportType", { required: true })}
          error={Boolean(errors.sportType)}
          helperText={errors.sportType ? String(errors.sportType?.message) : ""}
        />
        <span>Facebook</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control"
          {...register("facebook")}
        />
        <span>Instagram</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control"
          {...register("instagram")}
        />
        <span>Whatsapp</span>
        <TextField
          variant="outlined"
          className="subimissionFields__control"
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
          <Button
            className="button__submit"
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "#9c27b0" }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </div>
    </form>
  );
};
