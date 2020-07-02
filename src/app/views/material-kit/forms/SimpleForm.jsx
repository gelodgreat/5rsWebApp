import React, { Component} from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Icon,
  Grid,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

class SimpleForm extends Component {
  state = {
    Building: "",
    Department: "",
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleSubmit = event => {
    console.log("submitted");
    console.log(event);
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    let {
      Building,
      Department,
    } = this.state;
    return (
      <div>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => null}
        >
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="mb-16 w-100"
                label="Building"
                onChange={this.handleChange}
                type="text"
                name="Building"
                value={Building}
                validators={[
                  "required",
                  "minStringLength: 4",
                  "maxStringLength: 9"
                ]}
                errorMessages={["this field is required"]}
              />
              <br></br>
              <br></br>
              <TextValidator
                className="mb-16 w-100"
                label="Department"
                onChange={this.handleChange}
                type="text"
                name="Department"
                value={Department}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
            <br></br>
            <Button color="primary" variant="contained" type="submit">
              <Icon>add_box</Icon>
            <span className="pl-8 capitalize">Add</span>
          </Button>
  
          <br></br>
          <br></br>
          <br></br>
            <Button color="primary" variant="contained" type="submit">
              <Icon>add_box</Icon>
            <span className="pl-8 capitalize">Add</span>
          </Button>
          </Grid>
          </Grid>
        </ValidatorForm>
      </div>
    );
  }
}

export default SimpleForm;
