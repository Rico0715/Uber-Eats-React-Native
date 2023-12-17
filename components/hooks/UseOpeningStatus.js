// useOpeningStatus.js
import { useState, useEffect } from 'react';

const useOpeningStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openingHours = {
    0: { open: '12:00', close: '14:00' }, // Dimanche
    1: { open: '09:00', close: '23:00' }, // Lundi
    2: { open: '09:00', close: '23:00' }, //mardi
    3: { open: '09:00', close: '23:00' }, //mercredi
    4: { open: '09:00', close: '23:59' }, //jeudi
    5: { open: '09:00', close: '01:00' }, //vendredi
    6: { open: '09:00', close: '18:00' }, //samedi
  };

  useEffect(() => {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours() * 100 + now.getMinutes();

    // Vérification des horaires d'ouverture pour aujourd'hui
    const todayOpeningHours = openingHours[currentDay];

    if (todayOpeningHours) {
      const { open, close } = todayOpeningHours;

      const openTime = parseInt(open.replace(':', ''), 10);
      const closeTime = parseInt(close.replace(':', ''), 10);

      // Vérifie si le restaurant est ouvert actuellement
      if (currentHour >= openTime && currentHour <= closeTime) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    } else {
      setIsOpen(false); // Si aucun horaire n'est défini pour aujourd'hui, le restaurant est fermé
    }
  }, [openingHours]);

  return isOpen;
};

export default useOpeningStatus;
