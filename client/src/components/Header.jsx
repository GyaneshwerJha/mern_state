import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "8ch",
    height: "1ch",
    [theme.breakpoints.up("sm")]: {
      height: "1ch",
      width: "12ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Jha</span>
            <span className="text-slate-700">Estates</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="p-1 text-center rounded hidden sm:inline text-slate-700 cursor-pointer hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="p-1 text-center rounded hidden sm:inline text-slate-700 cursor-pointer hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="p-1 text-center rounded  sm:inline text-indigo-600 cursor-pointer border border-solid   hover:bg-indigo-500 hover:text-white transition-colors duration-300">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
