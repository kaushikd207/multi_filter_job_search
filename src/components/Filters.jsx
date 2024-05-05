import * as React from "react";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./Filters.css";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch } from "react-redux";
import { setFilterData } from "../actions/filteredData.slice";

export default function Filters({ jobList }) {
  const dispatch = useDispatch();
  const [filterFormData, setfilterFormData] = useState({
    roles: "",
    employee: "",
    exp: "",
    location: "",
    salary: "",
  });
  const [updateFilter, setUpdateFilter] = useState();

  const getFilteredData = () => {
    const filtered = jobList?.filter((d) => {
      // Check if any filter criteria is provided
      if (
        filterFormData.roles !== "" ||
        filterFormData.exp !== "" ||
        filterFormData.employee !== "" ||
        filterFormData.location !== "" ||
        filterFormData.salary !== ""
      ) {
        // Apply each filter criterion
        const roleFilter =
          filterFormData.roles === "" || filterFormData.roles === d.jobRole;
        const expFilter =
          filterFormData.exp === "" || filterFormData.exp >= d.minExp;
        const employeeFilter =
          filterFormData.employee === "" ||
          filterFormData.employee === d.numberOfEmployees;
        const locationFilter =
          filterFormData.location === "" ||
          filterFormData.location === d.location;
        const salaryFilter =
          filterFormData.salary === "" ||
          filterFormData.salary <= d.minJdSalary;
        // Return true only if all filters pass
        return (
          roleFilter &&
          expFilter &&
          employeeFilter &&
          locationFilter &&
          salaryFilter
        );
      }
      // If no filter criteria provided, return true (no filtering)
      return true;
    });
    return filtered; // Return the filtered array
  };

  useEffect(() => {
    const filterD = getFilteredData();
    dispatch(setFilterData(filterD));
  }, [filterFormData]);
  const handleChange = (event, key) => {
    setfilterFormData({ ...filterFormData, [key]: event?.target?.value });
  };
  return (
    <div className="filterContainer">
      <div className="dropDown">
        <InputLabel id="demo-simple-select-label">Roles</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterFormData?.roles}
          label="Roles"
          onChange={(event) => handleChange(event, "roles")}
        >
          {" "}
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"frontend"}>Frontend</MenuItem>
          <MenuItem value={"ios"}>Ios</MenuItem>
          <MenuItem value={"android"}>Android</MenuItem>
          <MenuItem value={"backend"}>Backend</MenuItem>
        </Select>
      </div>
      <div className="dropDown">
        <InputLabel id="demo-simple-select-label">
          Number of Employees
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterFormData.employee}
          label="Employees"
          onChange={(event) => handleChange(event, "employee")}
        >
          {" "}
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div className="dropDown">
        <InputLabel id="demo-simple-select-label">Experience</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterFormData.exp}
          label="Experience"
          onChange={(event) => handleChange(event, "exp")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </div>
      <div className="dropDown">
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterFormData.location}
          label="Location"
          onChange={(event) => handleChange(event, "location")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"remote"}>Remote</MenuItem>
          <MenuItem value={"mumbai"}>Mumbai</MenuItem>
          <MenuItem value={"bangalore"}>Bangalore</MenuItem>
          <MenuItem value={"chennai"}>Chennai</MenuItem>
        </Select>
      </div>
      <div className="dropDown">
        <InputLabel id="demo-simple-select-label">
          Minimum Base Pay Salary
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterFormData.salary}
          label="Salary"
          onChange={(event) => handleChange(event, "salary")}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10 Lakhs</MenuItem>
          <MenuItem value={20}>20 Lakhs</MenuItem>
          <MenuItem value={30}>30 Lakhs</MenuItem>
          <MenuItem value={40}>40 Lakhs</MenuItem>
          <MenuItem value={50}>50 Lakhs</MenuItem>
          <MenuItem value={60}>60 Lakhs</MenuItem>
          <MenuItem value={70}>70 Lakhs</MenuItem>
          <MenuItem value={80}>80 Lakhs</MenuItem>
          <MenuItem value={90}>9 Lakhs</MenuItem>
        </Select>
      </div>
      <div className="dropDown">
        <input placeholder="Search Company Name" />
      </div>
    </div>
  );
}
