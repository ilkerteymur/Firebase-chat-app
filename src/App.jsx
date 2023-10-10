import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase/config";
function App() {
  return (
    <>
      <button
        onClick={() => {
          signInWithPopup(auth, provider);
        }}
      >
        Google ile Giriş Yap
      </button>
    </>
  );
}

export default App;
