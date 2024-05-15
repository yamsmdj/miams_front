import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { isConnect, isAdmin } from "./components/Auth";
import Wrapper from "./components/Wrapper";
import Accueil from "./pages/Home/Accueil";
import Log from "./pages/Login/Login";
import Shop from "./pages/Shop";
import Categorie from "./pages/Categorie/Categorie";
import Recette from "./pages/Recette/Recette";
import Dashboard from "./pages/Admin/";
import Update from "./pages/Admin/crud/Update";
import Insert from "./pages/Admin/crud/Insert";
import { useEffect } from "react";
import ChefInsert from "./pages/Admin/crud/ChefInsert";
import Error404 from "./pages/Error404";
import SearchResults from "./components/SearchResults";
import RecetteByIngredient from "./pages/Recette/RecetteByIngredient";
import Moncompte from "./pages/Login/Moncompte";


function App() {
  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  });

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Log />} />
          <Route path="/register" element={<Log />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/:categorieName/:categorieId" element={<Categorie />} />
          <Route path="/recette/title/:recetteTitle" element={<Recette />} />
          <Route path="/recette/ingredient/:ingredientName" element={<RecetteByIngredient />} />
          <Route path="/moncompte/" element={isConnect() ? <Moncompte /> : <Navigate to="/" />} />

          <Route path="/admin/dashboard" element={isAdmin() ? <Dashboard /> : <Navigate to="*" />} />
          <Route path="/admin/update/:recetteId" element={isAdmin() ? <Update /> : <Navigate to="*" />} />
          <Route path="/admin/chefinsert" element={isAdmin() ? <ChefInsert /> : <Navigate to="*" />} />
          <Route path="/admin/insert" element={isAdmin() ? <Insert /> : <Navigate to="*" />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
