// src/components/LoginButton.jsx
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/login')}
      className="px-6 py-3 bg-[#ECCFC8] hover:bg-[#e7c8c0] text-[#373737] font-semibold rounded-lg shadow-md transition-colors duration-200"
    >
      Se connecter
    </button>
  );
};

export default LoginButton;