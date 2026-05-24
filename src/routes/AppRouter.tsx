import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { NavBar } from "../components/NavBar/NavBar";
import { CategoryPage } from "../pages/CategoryPage";
import { IngredientsPage } from "../pages/IngredientsPage";
import { LoginPage } from "../pages/LoginPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { OrdersPage } from "../pages/OrdersPage";
import { AdminUsersPage } from "../pages/AdminUsersPage";
import { UserPage } from "../pages/UserPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/*"
        element={
          <ProtectedRoute allowedRoles={["ADMIN", "STOCK", "PEDIDOS"]}>
            <NavBar />
            <main>
              <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/categories" element={<CategoryPage />} />
                <Route path="/ingredients" element={<IngredientsPage />} />
                <Route path="/profile" element={<UserPage />} />

                <Route
                  path="/orders"
                  element={
                    <ProtectedRoute allowedRoles={["ADMIN", "PEDIDOS"]}>
                      <OrdersPage />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/users"
                  element={
                    <ProtectedRoute allowedRoles={["ADMIN"]}>
                      <AdminUsersPage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};