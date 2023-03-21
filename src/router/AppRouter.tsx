import { Navigate, Route, Routes } from "react-router-dom";
import { DetailPage } from "../pages/DetailPage";
import { LoginPage } from "../pages/LoginPage";
import { PokemonPage } from "../pages/PokemonPage";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <PokemonPage /> } />
        <Route path="/card/:id" element={ <DetailPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </>
  );
};

