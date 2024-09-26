"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Notifications = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {

    const newNotifications = [
      "Nova venda registrada!",
      "Cobrança pendente para João.",
      "Maria visualizou seu perfil."
    ];
    
    setNotifications(newNotifications);

    const timer = setTimeout(() => {
      setNotifications([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <AnimatePresence>
        {notifications.length > 0 && (
          <motion.div
            className="bg-green-500 text-white p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-semibold">Notificações</h2>
            <ul className="list-disc pl-5">
              {notifications.map((notification, index) => (
                <motion.li key={index} initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.2 }}>
                  {notification}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;
