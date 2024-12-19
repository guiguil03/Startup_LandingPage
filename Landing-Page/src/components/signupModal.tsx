import { useState } from "react";
import Modal from "react-modal";
import { createUser } from "../hooks/Auth";
import "./css/signupModal.css";

export interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  runningLevel: "débutant" | "intermédiaire" | "avancé";
}

export interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

Modal.setAppElement("#root");

const initialFormData: UserFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  runningLevel: "débutant",
};

const SignupModal = ({ isOpen, onClose }: SignupModalProps) => {
  const [formData, setFormData] = useState<UserFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(formData);
      alert("Inscription réussie !");
      onClose();
      setFormData(initialFormData);
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      alert("Erreur lors de l'inscription. Veuillez réessayer.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="signup-modal"
      overlayClassName="signup-modal-overlay"
    >
      <div className="modal-header">
        <h2>Inscription</h2>
        <button onClick={onClose} className="close-button">
          &times;
        </button>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>

        <div className="form-group">
          <label htmlFor="runningLevel">Niveau en course à pied</label>
          <select
            id="runningLevel"
            name="runningLevel"
            value={formData.runningLevel}
            onChange={handleChange}
            required
          >
            <option value="débutant">Débutant</option>
            <option value="intermédiaire">Intermédiaire</option>
            <option value="avancé">Avancé</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          S'inscrire
        </button>
      </form>
    </Modal>
  );
};

export default SignupModal;
