import { useState } from 'react';
import './SimpleForm.css'; // Подключаем стили

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправлено:', formData);
    // Здесь можно добавить отправку данных
  };

  return (
    <form onSubmit={handleSubmit} className="simple-form">
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Имя"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="E-mail"
          required
        />
      </div>

      <div className="form-group">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="Телефон"
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Отправить заявку
      </button>
    </form>
  );
}