import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/home");
  };

  return (
    <div className="sign-in-container" style={{ backgroundColor: "#fff" }}>
      <nav className="nav-bar">
        <div
          className="linkedin-logo"
          style={{ color: "#0a66c2", fontWeight: "bold", fontSize: "24px" }}
        >
          LinkedIn
        </div>
        <div className="nav-buttons">
          <button className="join-now">Join now</button>
          <button className="sign-in" onClick={handleSignIn}>
            Sign in
          </button>
        </div>
      </nav>

      <main className="main-content">
        <div className="left-section">
          <h1>Welcome to your professional community</h1>
          <div className="sign-in-options">
            <button className="google-sign-in" onClick={handleSignIn}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
              />
              Continue as Guest
            </button>
            <button className="microsoft-sign-in" onClick={handleSignIn}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
                alt="Microsoft"
              />
              Continue with Microsoft
            </button>
            <div className="email-sign-in" onClick={handleSignIn}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747483.png"
                alt="Email"
              />
              <span>Sign in as Guest</span>
              <span className="email">guest@gmail.com</span>
            </div>
          </div>
          <p className="terms">
            By clicking Continue, you agree to LinkedIn's{" "}
            <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and{" "}
            <a href="#">Cookie Policy</a>.
          </p>
          <p className="new-to-linkedin">
            New to LinkedIn? <a href="#">Join now</a>
          </p>
        </div>
        <div className="right-section">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt="Professional illustration"
            className="hero-image"
          />
        </div>
      </main>
    </div>
  );
};

export default SignIn;
