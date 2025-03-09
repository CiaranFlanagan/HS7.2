import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

    const handleLogout = async() => {
        await supabase.auth.signOut();
        navigate("/login")
    }

  return (
    <div>
      <h1>Oasis HS7</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
